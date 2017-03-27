SystemJS.config({
  paths: {
    'npm:': 'jspm_packages/npm/',
    'github:': 'jspm_packages/github/',
    'webtask-totp/': 'src/'
  },
  browserConfig: {
    'baseURL': '/'
  },
  devConfig: {
    'map': {
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.21'
    }
  },
  transpiler: 'plugin-babel',
  packages: {
    'app': {
      'defaultExtension': 'js',
      'format': 'esm',
      'meta': {
        '*.js': {
          'loader': 'plugin-babel'
        },
        '*.css': { loader: 'css' }
      }
    },
    'github:components/font-awesome@4.7.0': {
      'meta': {
        '*.css': { loader: 'css' }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'angular': 'github:angular/bower-angular@1.6.3',
    'angular-animate': 'github:angular/bower-angular-animate@1.6.3',
    'angular-qrcode': 'npm:angular-qrcode@7.2.0',
    'angular-route': 'github:angular/bower-angular-route@1.6.3',
    'assert': 'npm:jspm-nodelibs-assert@0.2.1',
    'axios': 'npm:axios@0.15.3',
    'buffer': 'npm:jspm-nodelibs-buffer@0.2.2',
    'components/font-awesome': 'github:components/font-awesome@4.7.0',
    'constants': 'npm:jspm-nodelibs-constants@0.2.1',
    'crypto': 'npm:jspm-nodelibs-crypto@0.2.1',
    'css': 'github:systemjs/plugin-css@0.1.33',
    'events': 'npm:jspm-nodelibs-events@0.2.2',
    'fs': 'npm:jspm-nodelibs-fs@0.2.1',
    'http': 'npm:jspm-nodelibs-http@0.2.0',
    'https': 'npm:jspm-nodelibs-https@0.2.2',
    'lodash': 'npm:lodash@4.17.4',
    'os': 'npm:jspm-nodelibs-os@0.2.1',
    'path': 'npm:jspm-nodelibs-path@0.2.3',
    'process': 'npm:jspm-nodelibs-process@0.2.1',
    'qrcode-generator': 'npm:qrcode-generator@1.1.0',
    'stream': 'npm:jspm-nodelibs-stream@0.2.1',
    'string_decoder': 'npm:jspm-nodelibs-string_decoder@0.2.1',
    'text': 'github:systemjs/plugin-text@0.0.9',
    'url': 'npm:jspm-nodelibs-url@0.2.1',
    'util': 'npm:jspm-nodelibs-util@0.2.2',
    'vm': 'npm:jspm-nodelibs-vm@0.2.1',
    'zlib': 'npm:jspm-nodelibs-zlib@0.2.3'
  },
  packages: {
    'npm:angular-qrcode@7.2.0': {
      'map': {
        'angular': 'npm:angular@1.6.3',
        'qrcode-generator': 'npm:qrcode-generator@1.1.0'
      }
    },
    'npm:axios@0.15.3': {
      'map': {
        'follow-redirects': 'npm:follow-redirects@1.0.0'
      }
    },
    'npm:follow-redirects@1.0.0': {
      'map': {
        'debug': 'npm:debug@2.6.3'
      }
    },
    'npm:jspm-nodelibs-buffer@0.2.2': {
      'map': {
        'buffer': 'npm:buffer@4.9.1'
      }
    },
    'npm:jspm-nodelibs-http@0.2.0': {
      'map': {
        'http-browserify': 'npm:stream-http@2.6.3'
      }
    },
    'npm:jspm-nodelibs-url@0.2.1': {
      'map': {
        'url': 'npm:url@0.11.0'
      }
    },
    'npm:jspm-nodelibs-zlib@0.2.3': {
      'map': {
        'browserify-zlib': 'npm:browserify-zlib@0.1.4'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'base64-js': 'npm:base64-js@1.2.0',
        'isarray': 'npm:isarray@1.0.0',
        'ieee754': 'npm:ieee754@1.1.8'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'punycode': 'npm:punycode@1.3.2',
        'querystring': 'npm:querystring@0.2.0'
      }
    },
    'npm:stream-http@2.6.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
        'builtin-status-codes': 'npm:builtin-status-codes@3.0.0',
        'readable-stream': 'npm:readable-stream@2.2.6',
        'xtend': 'npm:xtend@4.0.1'
      }
    },
    'npm:debug@2.6.3': {
      'map': {
        'ms': 'npm:ms@0.7.2'
      }
    },
    'npm:jspm-nodelibs-stream@0.2.1': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:browserify-zlib@0.1.4': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.2.6',
        'pako': 'npm:pako@0.2.9'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.2.6'
      }
    },
    'npm:jspm-nodelibs-crypto@0.2.1': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:jspm-nodelibs-os@0.2.1': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'npm:readable-stream@2.2.6': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'inherits': 'npm:inherits@2.0.3',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'util-deprecate': 'npm:util-deprecate@1.0.2'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'randombytes': 'npm:randombytes@2.0.3',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.8'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'bn.js': 'npm:bn.js@4.11.6',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'elliptic': 'npm:elliptic@6.4.0'
      }
    },
    'npm:pbkdf2@3.0.9': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'miller-rabin': 'npm:miller-rabin@4.0.0'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'elliptic': 'npm:elliptic@6.4.0'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:elliptic@6.4.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'brorand': 'npm:brorand@1.1.0',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'hmac-drbg': 'npm:hmac-drbg@1.0.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'hash.js': 'npm:hash.js@1.0.3'
      }
    },
    'npm:cipher-base@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'inherits': 'npm:inherits@2.0.3',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:parse-asn1@5.1.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'asn1.js': 'npm:asn1.js@4.9.1'
      }
    },
    'npm:sha.js@2.4.8': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.1.0'
      }
    },
    'npm:jspm-nodelibs-string_decoder@0.2.1': {
      'map': {
        'string_decoder': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hmac-drbg@1.0.0': {
      'map': {
        'hash.js': 'npm:hash.js@1.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1'
      }
    },
    'npm:asn1.js@4.9.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'github:angular/bower-angular-route@1.6.3': {
      'map': {
        'angular': 'github:angular/bower-angular@1.6.3'
      }
    },
    'github:angular/bower-angular-animate@1.6.3': {
      'map': {
        'angular': 'github:angular/bower-angular@1.6.3'
      }
    }
  }
});
