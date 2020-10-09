<template>
  <li class="post-li">
    <router-link :to="`/post/${post.id}`">
      <div class="post-header">
        <span class="post-title">{{ post.title }}</span>
        <span class="post-views">{{ post.views }}</span>
      </div>
      <div class="post-footer">
        <span class="post-user">{{ account.nickName }}</span>
        <span class="post-created">{{ changeDate() }}</span>
      </div>
    </router-link>
  </li>
</template>

<script>
import { fetchPost } from '@/api/posts.js';
import { formatDate } from '@/utils/filters.js';
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      account: {},
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      const { data } = await fetchPost(this.post.id);
      this.account = data.account;
    },
    changeDate() {
      if (Array.isArray(this.post.updatedAt)) {
        return formatDate(this.post.updatedAt);
      } else {
        return this.post.updatedAt;
      }
    },
  },
};
</script>

<style scoped>
.post-li {
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f9ff;
}

.post-title {
  font-size: 1rem;
  font-weight: 600;
}

.post-created {
  float: right;
  font-size: 0.8rem;
}

.post-user {
  font-size: 0.8rem;
}

.post-views {
  float: right;
  font-size: 0.8rem;
}

a {
  color: black;
}
</style>
