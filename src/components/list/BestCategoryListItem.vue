<template>
  <div id="wrap">
    <loading-spinner v-if="isLoading"></loading-spinner>
    <div class="list-header" v-else>
      <div class="title">실시간 {{ title }} Top 10</div>
      <div class="move-category">
        <router-link
          :to="`/category/${categoryMap[category.categoryName]}/${category.id}`"
        >
          <font-awesome-icon
            :icon="['fas', 'arrow-right']"
            :style="{ color: '#2699fb' }"
          />
        </router-link>
      </div>
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
      categoryMap: {
        전공: 'major',
        취업: 'employment',
        스터디: 'study',
        생활정보: 'life',
        시사이슈: 'issue',
        오늘뭐하지: 'today',
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

.list-header {
  display: flex;
}

.title {
  color: #2d76c9;
  font-weight: bolder;
}

.move-category {
  margin-left: auto;
}
</style>
