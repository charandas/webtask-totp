export default function TotpDetailController ($scope, secret, $location) {
  'ngInject';
  function getLink ({ org, account }) {
    return `otpauth://totp/${org}:${account}?secret=${secret}&issuer=WebtaskTotp`;
  }

  this.org = 'Organization';
  this.account = 'user@example.com';
  this.otpLink = getLink({
    org: this.org,
    account: this.account
  });

  this.snapped = () => {
    $location.url('/verify');
  };

  $scope.$watch(() => this.org, (newVal) => {
    this.otpLink = getLink({
      org: newVal,
      account: this.account
    });
  });

  $scope.$watch(() => this.account, (newVal) => {
    this.otpLink = getLink({
      org: this.org,
      account: newVal
    });
  });
}
