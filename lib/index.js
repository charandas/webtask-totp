const Express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const base32 = require('hi-base32');
const cors = require('cors');

const TIME_STEP_MS = 30000;
const DIGITS_IN_OTP = 6;

const app = Express();

function padLeft (otp) {
  const pad = '000000';
  const ans = pad.substring(0, pad.length - otp.length) + otp;
  return ans;
}

function verificationOTP (hmac) {
  const offset = hmac[ hmac.length - 1 ] & 0xf;
  const binary = ((hmac[offset] & 0x7f) << 24) |
    ((hmac[offset + 1] & 0xff) << 16) |
    ((hmac[offset + 2] & 0xff) << 8) |
    ((hmac[offset + 3] & 0xff) << 0);
  const computed = binary % Math.pow(10, DIGITS_IN_OTP);
  return padLeft(computed);
}

function unixEpochinMS () {
  const d = new Date();
  return d.getTime();
}

function uint64Buffer (num) {
  var res = [];
  while (res.length < 8) {
    res.unshift(num & 0xFF);
    num = num >> 8;
  }
  return new Buffer(res);
}

function generateSecretBase32 (req, cb) {
  req.webtaskContext.storage.get(function (error, data) {
    if (error) {
      cb(error);
    }
    data = data || {};
    if (!data.secret) {
      crypto.randomBytes(32, (err, buffer) => {
        if (err) {
          console.log('Could not create secret');
          return cb(err);
        }
        const secret = base32.encode(buffer.toString('utf8')).replace(/=/g, '');
        data.secret = secret;

        req.webtaskContext.storage.set(data, function (error) {
          if (error) {
            return cb(err);
          }
          cb(null, secret);
        });
      });
    } else {
      cb(null, data.secret);
    }
  });
}

app.use(cors());
app.use(bodyParser.json());
app.use(serveStatic('public'));
app.get('/api/secret', (req, res, next) => {
  generateSecretBase32(req, (err, secret) => {
    if (err) {
      res.status(500).send('Could not generate secret');
    }
    res.json({ secret });
  });
});
app.post('/api/verify', (req, res, next) => {
  req.webtaskContext.storage.get(function (error, data) {
    if (error) return next(error);
    const tc = Math.floor(unixEpochinMS() / TIME_STEP_MS);
    const hashBuffer = crypto.createHmac('sha1', Buffer.from(base32.decode(data.secret))).update(uint64Buffer(tc)).digest();
    const computedOTP = verificationOTP(hashBuffer);
    console.log(`verification OTP: ${computedOTP}`);
    console.log(`Passed OTP: ${req.body.otp}`);
    res.send({
      didVerify: req.body.otp === computedOTP
    });
  });
});

module.exports = app;
