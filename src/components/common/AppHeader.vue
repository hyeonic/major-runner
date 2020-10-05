<template>
  <header>
    <div class="header-container">
      <span class="search">
        <font-awesome-icon
          @click="clickSearch"
          :icon="['fas', 'search']"
          :style="{ color: '#2699fb' }"
        />
      </span>
      <div class="logo">
        <router-link to="/main">MajorRunner</router-link>
      </div>
      <span class="user-state">
        <font-awesome-icon
          v-if="isLogin"
          @click="modalControl"
          :icon="['fas', 'user']"
          :style="{ color: '#2699fb' }"
        />
        <font-awesome-icon
          v-else
          @click="modalControl"
          :icon="['far', 'user']"
          :style="{ color: '#2699fb' }"
        />
      </span>
    </div>

    <!-- search bar -->
    <search-form v-if="showSearch"></search-form>

    <!-- modal dialog -->
    <modal-dialog v-if="showModal">
      <h3 slot="header">MajorRunner</h3>
      <div slot="body">
        <template v-if="isLogin">
          <div class="user-info">
            {{ fetchedUserInfo }}
          </div>
          <div class="action-btn" @click="modalControl">
            <router-link to="/user-info">내 정보</router-link>
          </div>
          <div class="action-btn" @click="logoutUser">
            <router-link to="/main">로그아웃</router-link>
          </div>
        </template>
        <template v-else>
          <div class="action-btn" @click="modalControl">
            <router-link to="/login">로그인</router-link>
          </div>
          <div class="action-btn" @click="modalControl">
            <router-link to="/signup">회원가입</router-link>
          </div>
        </template>
      </div>
      <div slot="footer">
        <div class="close-modal-btn" @click="modalControl">닫기</div>
      </div>
    </modal-dialog>

    <!-- global navigation -->
    <div class="gnb">
      <ul class="gnb-ul">
        <li class="gnb-li" v-for="(category, index) in categorys" :key="index">
          <router-link :to="category.path">{{ category.name }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import ModalDialog from '@/components/common/ModalDialog.vue';
import SearchForm from '@/components/form/SearchForm.vue';
import { deleteCookie } from '@/utils/cookies.js';

export default {
  data() {
    return {
      categorys: [
        { name: '전공', path: '/category/major' },
        { name: '취업', path: '/category/employment' },
        { name: '대외활동', path: '/category/activity' },
        { name: '스터디', path: '/category/study' },
        { name: '생활 정보', path: '/category/life' },
        { name: '시사 이슈', path: '/category/issue' },
        { name: '오늘 뭐하지?', path: '/category/today' },
      ],
      showModal: false,
      showSearch: false,
      username: '',
    };
  },
  computed: {
    fetchedUserInfo() {
      return this.$store.getters.fetchedUserInfo.nickName;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    modalControl() {
      if (this.showModal !== false) {
        this.showModal = false;
      } else {
        this.showModal = true;
      }
    },
    clickSearch() {
      if (this.showSearch !== false) {
        this.showSearch = false;
      } else {
        this.showSearch = true;
      }
    },
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$store.commit('clearNickName');
      this.$store.commit('clearToken');
      deleteCookie('mr_auth');
      deleteCookie('mr_user');
      deleteCookie('mr_nick_name');
      this.$router.push('/login');
    },
  },

  components: {
    ModalDialog,
    SearchForm,
  },
};
</script>

<style scoped>
header {
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  background-color: white;
  padding-bottom: 0.5rem;
}

.header-container {
  padding: 0.5rem 0;
  display: flex;
}

.search {
  font-size: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  flex: 1;
  padding-top: 0.5rem;
}

.logo {
  margin: auto;
  flex: 7;
  text-align: center;
}

.logo > a {
  font-size: 2rem;
  color: #2d76c9;
  font-family: Berlin Sans FB;
}

.user-state {
  font-size: 2rem;
  text-align: center;
  flex: 1;
}

.user-info {
  text-align: center;
  margin: 1rem 0;
}

.action-btn > a {
  display: inline-block;
  width: 100%;
  border: 1px solid #2699fb;
  border-radius: 20px;
  margin: 0.4rem 0;
  padding: 0.5rem;
  text-align: center;
  background-color: #2699fb;
  color: antiquewhite;
}

.close-modal-btn {
  display: inline-block;
  width: 100%;
  border: 1px solid antiquewhite;
  border-radius: 20px;
  margin: 0.4rem 0;
  padding: 0.5rem;
  text-align: center;
  background-color: antiquewhite;
  color: #2699fb;
}

.gnb-ul {
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  text-align: center;
}

.gnb-li > a {
  color: #2699fb;
  padding: 0.5rem 0.5rem;
}

.gnb-ul::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
</style>
