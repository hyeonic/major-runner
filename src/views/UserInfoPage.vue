<template>
  <div id="wrap">
    <div class="user-info">
      <div>{{ account.username }}</div>
      <div>{{ account.nickName }}</div>
    </div>
    <div class="user-created">생성일 : {{ createdAt }}</div>
  </div>
</template>

<script>
import { fetchAccount } from '@/api/account.js';
import { formatDate } from '@/utils/filters.js';
export default {
  data() {
    return {
      account: {},
      createdAt: '',
    };
  },
  created() {
    this.account = this.$store.getters.fetchedUserInfo;
    this.fetchAccount();
  },
  methods: {
    async fetchAccount() {
      try {
        const { data } = await fetchAccount(this.account.username);
        this.account = data;
        this.formatDate();
      } catch (error) {
        console.log(error);
      }
    },
    formatDate() {
      this.createdAt = formatDate(this.account.createdAt);
    },
  },
};
</script>

<style scoped>
.user-info {
  padding: 0.5rem 0;
}

.user-created {
  border-bottom: 1px solid #ccc;
  text-align: center;
  padding-bottom: 0.5rem;
}
</style>
