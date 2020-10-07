<template>
  <div>
    <loading-spinner v-if="isLoading"></loading-spinner>
    <div v-else>
      <div class="title">
        {{ category.categoryName }} - {{ category.subCategoryName }} 게시판
      </div>
      <router-link class="create-button" :to="`/post/${category.id}/add`"
        ><font-awesome-icon :icon="['fas', 'pen']" :style="{ color: '#2699fb' }"
      /></router-link>
    </div>
    <ul>
      <post-list-item
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
        @refresh="fetchPosts"
      ></post-list-item>
    </ul>
    <div class="footer">
      <button @click="decrementPage" :disabled="pageble.page === 0">
        이전
      </button>
      <div>{{ pageble.page + 1 }} / {{ totalPages }}</div>
      <button
        @click="incrementPage"
        :disabled="pageble.page === totalPages - 1"
      >
        다음
      </button>
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/list/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchCategory } from '@/api/category.js';
import { fetchPosts } from '@/api/posts.js';

export default {
  data() {
    return {
      categoryId: '',
      category: {},
      posts: [],
      pageble: {
        page: 0,
        size: 10,
        sort: 'createdAt',
      },
      totalPages: 0,
      isLoading: false,
    };
  },
  created() {
    this.fetchCategory();
    this.fetchPosts();
  },
  methods: {
    async fetchCategory() {
      this.isLoading = true;
      this.categoryId = this.$route.params.categoryId;
      const { data } = await fetchCategory(this.categoryId);
      this.isLoading = false;
      this.category = data;
    },
    async fetchPosts() {
      this.isLoading = true;
      this.categoryId = this.$route.params.categoryId;
      const { data } = await fetchPosts(this.categoryId, this.pageble);
      this.totalPages = data.totalPages;
      this.posts = data.content;
      this.isLoading = false;
    },
    incrementPage() {
      this.pageble.page += 1;
      this.fetchPosts();
    },
    decrementPage() {
      this.pageble.page -= 1;
      this.fetchPosts();
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

.footer {
  display: flex;
  margin: 1rem 0;
}

.footer > button {
  flex: 3;
  border: 1px solid #f1f9ff;
  border-radius: 20px;
  padding: 0.5rem;
  color: #2d76c9;
  font-weight: bold;
}

.footer > div {
  flex: 3;
  color: #2d76c9;
  margin: auto 0;
  text-align: center;
}
</style>
