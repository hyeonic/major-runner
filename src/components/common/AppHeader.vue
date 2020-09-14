<template>
  <header>
    <div class="header-container">
      <div class="logo">
        <router-link to="/main">MajorRunner</router-link>
      </div>
      <span class="user-state" @click="modalControll">&nabla;</span>
    </div>

    <!-- modal dialog -->
    <modal-dialog v-if="showModal">
      <h3 slot="header">MajorRunner</h3>
      <div slot="body">
        <div class="action-btn" @click="modalControll">
          <router-link to="/login">로그인</router-link>
        </div>
        <div class="action-btn" @click="modalControll">
          <router-link to="/signup">회원가입</router-link>
        </div>
      </div>
      <div slot="footer">
        <div class="close-modal-btn" @click="modalControll">닫기</div>
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
    };
  },
  methods: {
    modalControll() {
      if (this.showModal !== false) {
        this.showModal = false;
      } else {
        this.showModal = true;
      }
    },
  },
  components: {
    ModalDialog,
  },
};
</script>

<style scoped>
.header-container {
  padding: 0.5rem 0;
  display: flex;
}

.logo {
  margin-right: auto;
  margin-left: 1rem;
}

.logo > a {
  font-size: 2rem;
  color: #2d76c9;
  font-family: Berlin Sans FB;
}

.user-state {
  margin-left: auto;
  margin-right: 1rem;
  font-size: 2rem;
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
</style>
