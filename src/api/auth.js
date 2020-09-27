import { instance } from './index.js';

// 회원가입 API
function registerUser(userData) {
  return instance.post('/api/account/signup', userData);
}

// token을 발급 받는 login API
function getToken(userData) {
  return instance.post('/aouth/token', userData);
}
export { registerUser, getToken };
