import angular from 'angular';
import 'angular-route';
import 'qrcode-generator';
import ngQrcode from 'angular-qrcode';
import axios from './axios';
import get from 'lodash/get';
import 'components/font-awesome';

import './styles.css';

import TotpDetailController from './totp-detail';
import TotpDetailTpl from './totp-detail.html!text';

import TotpVerifyController from './totp-verify';
import TotpVerifyTpl from './totp-verify.html!text';

function getSecret () {
  return axios
    .get('/api/secret')
    .then(response => get(response, 'data.secret'));
}

angular
  .module('webtask-totp', [ngQrcode, 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      controller: TotpDetailController,
      controllerAs: 'vm',
      template: TotpDetailTpl,
      resolve: {
        secret: getSecret
      }
    });

    $routeProvider.when('/verify', {
      controller: TotpVerifyController,
      controllerAs: 'vm',
      template: TotpVerifyTpl
    });
  });
