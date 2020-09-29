<template>
  <div>
    <loading-spinner v-if="isLoading"></loading-spinner>
    <div v-else>
      <div class="title">
        {{ category.categoryName }} - {{ category.subCategoryName }} 게시판
      </div>
      <router-link
        class="create-button"
        :to="`/post/${category.categoryName}/add`"
        ><font-awesome-icon :icon="['fas', 'pen']" :style="{ color: '#2699fb' }"
      /></router-link>
    </div>
    <ul>
      <post-list-item></post-list-item>
      <post-list-item></post-list-item>
    </ul>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchCategory } from '@/api/category.js';

export default {
  data() {
    return {
      categoryId: '',
      category: {},
      isLoading: false,
    };
  },
  created() {
    this.fetchCategory();
  },
  methods: {
    async fetchCategory() {
      this.isLoading = true;
      this.categoryId = this.$route.params.categoryId;
      const { data } = await fetchCategory(this.categoryId);
      this.isLoading = false;
      //   console.log(data);
      this.category = data;
    },
  },
  components: {
    PostListItem,
    LoadingSpinner,
  },
};
</script>

<style scoped>
.title {
  display: inline-block;
  font-size: 1.3rem;
  color: #2d76c9;
  font-weight: bolder;
}

.create-button {
  float: right;
  font-size: 1.5rem;
}
</style>
