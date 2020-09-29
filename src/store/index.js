import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '../utils/cookies.js';
import { getToken } from '@/api/auth.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
    nickName: '',
  },
  getters: {
    fetchedUser(state) {
      return state.username;
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
      console.log(response);
      commit('setUsername', userData.username);
      commit('setToken', 'Bearer ' + response.data.access_token);
      saveAuthToCookie(response.data.access_token);
      saveUserToCookie(userData.username);
      return response;
    },
  },
});
