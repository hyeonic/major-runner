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
        <ul v-if="categories.length !== 0">
          <li
            class="li-category"
            v-for="(category, index) in categories"
            :key="index"
          >
            <router-link
              :to="
                `/category/${categoryMap[category.categoryName]}/${category.id}`
              "
            >
              {{ category.categoryName }} / {{ category.subCategoryName }}
            </router-link>
          </li>
        </ul>
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
      categoryMap: {
        전공: 'major',
        취업: 'employment',
        스터디: 'study',
        생활정보: 'life',
        시사이슈: 'issue',
        오늘뭐하지: 'today',
      },
    };
  },
  created() {
    this.fetchAccountInfo();
  },
  methods: {
    async fetchAccountInfo() {
      try {
        this.accountInfo = this.$store.getters.fetchedUserInfo;
        if (this.accountInfo.nickName === '') {
          this.categoryMessage = '로그인 후 이용하세요!';
        } else if (this.accountInfo !== undefined) {
          const { data } = await fetchAccountInfo(this.accountInfo);
          this.categories = data;
          this.$store.commit('selectCategories', this.categories);
        }
      } catch (error) {
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

.li-category > a {
  color: #2699fb;
}
</style>
