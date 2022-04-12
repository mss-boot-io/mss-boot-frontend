import Sdk from 'casdoor-js-sdk';

let CasdoorSdk: Sdk;

export function initCasdoorSdk(config) {
  CasdoorSdk = new Sdk(config);
}

export function getSignupUrl() {
  return CasdoorSdk.getSignupUrl();
}

export function getSigninUrl() {
  return CasdoorSdk.getSigninUrl();
}

export function getUserProfileUrl(userName, account) {
  return CasdoorSdk.getUserProfileUrl(userName, account);
}

export function getMyProfileUrl(account) {
  return CasdoorSdk.getMyProfileUrl(account);
}

export function getMyResourcesUrl(account) {
  return CasdoorSdk.getMyProfileUrl(account).replace('/account?', '/resources?');
}

export function signin() {
  return CasdoorSdk.signin(ServerUrl);
}

export function showMessage(type, text) {
  if (type === '') {
    return;
  } else if (type === 'success') {
    message.success(text);
  } else if (type === 'error') {
    message.error(text);
  }
}

export function goToLink(link) {
  window.location.href = link;
}
