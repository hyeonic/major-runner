<template>
  <div id="wrap">
    <div class="choise-category">
      <div class="choise-category-header">
        <span>관심 카테고리</span>
        <font-awesome-icon
          @click="selectCategories"
          :icon="['fas', 'plus']"
          :style="{ color: '#2699fb' }"
        />
      </div>
      <div class="choise-category-section">
        <ul v-if="categories.length !== 0"></ul>
        <div v-else>
          {{ categoryMessage }}
        </div>
      </div>
    </div>

    <br />
  </div>
</template>

<script>
import { fetchAccountInfo } from '@/api/accountInfo.js';

export default {
  data() {
    return {
      accountInfo: {},
      categoryMessage: '',
      categories: [],
    };
  },
  created() {
    this.fetchAccountInfo();
  },
  methods: {
    async fetchAccountInfo() {
      try {
        this.accountInfo = this.$store.getters.fetchedUserInfo;
        if (this.accountInfo === undefined) {
          this.categoryMessage = '로그인 후 이용하세요!';
        } else if (this.accountInfo !== undefined) {
          const { data } = await fetchAccountInfo(this.accountInfo);
          this.categories = data;
        }
      } catch (error) {
        // console.log(error);
        this.categoryMessage = '선호하는 카테고리를 선택하세요!';
      }
    },
    selectCategories() {
      this.$router.push('/user/category/add');
    },
  },
};
</script>

<style scoped>
.choise-category {
  color: #2699fb;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 20px;
}

.choise-category-header {
  color: #2d76c9;
  font-weight: bold;
  padding: 0 0 0.5rem 0;
  display: flex;
}

.choise-category-header > svg {
  margin-left: auto;
}

/* .choise-category-header > svg :hover {
  color: whitesmoke;
} */
</style>
