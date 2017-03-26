import axios from 'axios';
import get from 'lodash/get';

export default function TotpVerifyController ($scope, $timeout) {
  'ngInject';

  this.otp = '';
  this.didverify = false;
  this.ran = false;

  this.verify = (otp) => {
    this.verifying = true;
    this.ran = true;
    axios
      .post('/api/verify', {
        otp
      })
      .then(response => {
        const didVerify = get(response, 'data.didVerify');
        this.didverify = didVerify;
        this.verifying = false;
        $timeout(() => $scope.$digest(), 1500);
      });
  };
}
