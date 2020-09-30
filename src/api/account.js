import { account } from './index.js';

// account 한건을 조회하는 API
function fetchAccount(username) {
  return account.get(`/username/${username}/`);
}

export { fetchAccount };
