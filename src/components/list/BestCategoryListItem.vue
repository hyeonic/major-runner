<template>
  <div id="wrap">
    <loading-spinner v-if="isLoading"></loading-spinner>
    <div v-else>
      <div class="title">실시간 {{ title }} Top 10</div>
    </div>
    <div class="section">
      <ul>
        <best-post-list-item
          v-for="(post, index) in posts"
          :key="index"
          :post="post"
        ></best-post-list-item>
      </ul>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import BestPostListItem from '@/components/list/BestPostListItem.vue';
import { fetchPosts } from '@/api/posts.js';

export default {
  data() {
    return {
      title: '',
      posts: [],
      pageble: {
        page: 0,
        size: 10,
        sort: 'views,createdAt',
      },
      isLoading: false,
    };
  },
  props: {
    category: {
      type: Object,
    },
  },
  created() {
    this.fetchPosts();
    this.makeTitle();
  },
  methods: {
    async fetchPosts() {
      this.isLoading = true;
      const { data } = await fetchPosts(this.category.id, this.pageble);
      this.posts = data.content;
      this.isLoading = false;
    },
    makeTitle() {
      if (this.category.subCategoryName === '') {
        this.title = this.category.categoryName;
      } else if (this.category.subCategoryName !== '') {
        this.title =
          this.category.categoryName + ' / ' + this.category.subCategoryName;
      }
    },
  },
  components: {
    LoadingSpinner,
    BestPostListItem,
  },
};
</script>

<style scoped>
#wrap {
  color: #2699fb;
  border: 1px solid #f1f9ff;
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.title {
  color: #2d76c9;
  font-weight: bolder;
}
</style>
