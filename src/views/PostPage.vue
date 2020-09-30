<template>
  <div id="wrap">
    <loading-spinner v-if="isLoading"></loading-spinner>
    <template v-else>
      <div class="post-header">
        <font-awesome-icon
          class="user-icon"
          :icon="['far', 'user']"
          :style="{ color: '#2699fb' }"
        />
        <div calss="post-info">
          <div class="user">{{ account.nickName }}</div>
          <div class="created">{{ post.created || '2020-09-30' }}</div>
        </div>
        <font-awesome-icon
          class="like-icon"
          :icon="['fas', 'thumbs-up']"
          :style="{ color: '#2699fb' }"
        />
      </div>
      <div class="post-section">
        <div class="title">{{ post.title }}</div>
        <div class="contents">
          {{ post.contents }}
        </div>
      </div>
      <div class="post-comments">
        <div class="write-comment">
          <comment-add-form :postId="postId"></comment-add-form>
        </div>
        <div class="comment-list">
          <ul>
            <comment-list-item
              v-for="(comment, index) in comments"
              :key="index"
              :comment="comment"
            ></comment-list-item>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import CommentAddForm from '@/components/form/CommentAddForm.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import CommentListItem from '@/components/list/CommentListItem.vue';
import { fetchPost, fetchComments } from '@/api/posts.js';

export default {
  data() {
    return {
      postId: '',
      post: {},
      account: {},
      comments: [],
      logMessage: '',
      isLoading: false,
    };
  },
  created() {
    this.postId = this.$route.params.id;
    this.isLoading = true;
    this.fetchPost();
    this.fetchComments();
    this.isLoading = false;
  },
  methods: {
    async fetchPost() {
      const { data } = await fetchPost(this.postId);
      console.log(data);
      this.post = data;
      this.account = this.post.account;
    },
    async fetchComments() {
      const { data } = await fetchComments(this.postId);
      console.log(data);
      this.comments = data;
    },
  },
  components: {
    CommentAddForm,
    CommentListItem,
    LoadingSpinner,
  },
};
</script>

<style scoped>
.post-header {
  display: flex;
}

.user-icon {
  font-size: 2rem;
}

.post-info {
  margin-left: 0.5rem;
}

.like-icon {
  margin-left: auto;
  font-size: 2rem;
}

.user {
  font-weight: bold;
  padding-left: 0.5rem;
}

.created {
  padding-left: 0.5rem;
  font-size: 0.8rem;
}

.post-section {
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
}

.title {
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
}

.contents {
  padding-top: 0.5rem;
}
</style>
