import { instance } from './index.js';

// 회원가입 API
function registerUser(userData) {
  return instance.post('/api/account/signup', userData);
}

// token을 발급 받는 login API
function getToken(userData) {
  const data = new FormData();
  data.append('username', userData.username);
  data.append('password', userData.password);
  data.append('grant_type', 'password');

  console.log(userData);
  return instance.post('/oauth/token', data);
}

export { registerUser, getToken };
