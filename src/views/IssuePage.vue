<template>
  <div id="wrap">
    <div class="title">시사 이슈 게시판</div>
    <div class="sub-category">
      <loading-spinner v-if="isLoading"></loading-spinner>
      <ul class="category-ul" v-else>
        <li
          class="category-list"
          v-for="(category, index) in subCategories"
          :key="index"
        >
          <router-link
            class="sub-category-link"
            :to="`/category/major/${category.id}`"
          >
            {{
              category.subCategoryName === ''
                ? '모두의 시사 이슈 게시판'
                : category.subCategoryName
            }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchCategories } from '@/api/category.js';

export default {
  data() {
    return {
      isLoading: false,
      subCategories: [],
    };
  },
  methods: {
    async fetchCategories() {
      this.isLoading = true;
      const { data } = await fetchCategories('시사이슈');
      this.isLoading = false;
      this.subCategories = data;
    },
  },
  created() {
    this.fetchCategories();
  },
  components: {
    LoadingSpinner,
  },
};
</script>

<style scoped>
.title {
  font-size: 1.3rem;
  color: #2d76c9;
  font-weight: bolder;
}

.category-ul {
  margin: 1rem 0;
}

.category-list {
  border: 1px solid #ccc;
  font-size: 1rem;
  border-radius: 20px;
  margin: 0.5rem 0;
  width: 100%;
}

.sub-category-link {
  display: inline-block;
  padding: 0.5rem;
  text-align: center;
  color: #2699fb;
  width: 100%;
  height: 100%;
}
</style>
