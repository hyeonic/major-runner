import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  getNickNameFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
  saveNickNameToCookie,
} from '../utils/cookies.js';
import { getToken } from '@/api/auth.js';
import { fetchAccount } from '@/api/account.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
    nickName: getNickNameFromCookie() || '',
  },
  getters: {
    fetchedUserInfo(state) {
      const userInfo = {
        username: state.username,
        nickName: state.nickName,
      };
      return userInfo;
    },
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
    },
    setNickName(state, nickName) {
      state.nickName = nickName;
    },
    getNickName(state) {
      state.nickName = '';
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const response = await getToken(userData);
      const account = await fetchAccount(userData.username);

      // vuex store에 저장
      commit('setUsername', userData.username);
      commit('setToken', 'Bearer ' + response.data.access_token);
      commit('setNickName', account.data.nickName);

      // 쿠기 정보 저장
      saveAuthToCookie(response.data.access_token);
      saveUserToCookie(userData.username);
      saveNickNameToCookie(account.data.nickName);
      return response.data;
    },
  },
});
