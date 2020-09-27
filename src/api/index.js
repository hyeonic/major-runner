import axios from 'axios';

// axios 초기화 함수
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

export const instance = createInstance();
