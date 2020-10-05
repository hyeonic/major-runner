import { accountInfo } from './index.js';

// accountInfo를 추가하는 API
function createAccountInfo(userInfo) {
  return accountInfo.post('/', userInfo);
}

// 해당 accountInfo를 조회하는 API
function fetchAccountInfo(account) {
  return accountInfo.get(`/nick-name/${account.nickName}`);
}

// 해당 accountInfo를 수정하는 API
function editAccountInfo(userInfo) {
  return accountInfo.put('/', userInfo);
}

export { createAccountInfo, fetchAccountInfo, editAccountInfo };
