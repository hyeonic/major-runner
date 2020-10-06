import { accountInfo } from './index.js';

// accountInfo를 추가하는 API
function createAccountInfo(userInfo) {
  return accountInfo.post('', userInfo);
}

// 해당 accountInfo를 조회하는 API
function fetchAccountInfo(account) {
  return accountInfo.get(`/nick-name/${account.nickName}`);
}

export { createAccountInfo, fetchAccountInfo };
