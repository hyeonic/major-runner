import axios from 'axios';
import { setInterceptors } from './common/interceptors.js';

// axios 초기화 함수
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset = utf-8',
    },
    auth: {
      username: 'myApp',
      password: 'pass',
    },
    mimeType: 'multipart/form-data',
  });
}

// axios 초기화 함수 with auth
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    // headers: {
    //   Authorization: store.state.token, token이 담기기 전에 담아버림
    // },
  });

  return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithAuth('/api/posts');
