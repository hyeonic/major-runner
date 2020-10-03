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
          v-if="likeStatus"
          class="like-icon"
          @click="changeLike"
          :icon="['fas', 'thumbs-up']"
          :style="{ color: '#2699fb' }"
        />
        <font-awesome-icon
          v-else
          class="like-icon"
          @click="changeLike"
          :icon="['far', 'thumbs-up']"
          :style="{ color: '#2699fb' }"
        />
      </div>
      <div class="post-section">
        <div class="title">{{ post.title }}</div>
        <div class="contents">
          {{ post.contents }}
        </div>
      </div>
      <div class="write-comment">
        <comment-add-form
          @reload-post="fetchComments"
          :postId="postId"
        ></comment-add-form>
      </div>
      <div class="post-comments">
        <div class="comment-list">
          <ul>
            <comment-list-item
              v-for="(comment, index) in comments"
              :key="index"
              :comment="comment"
              @reload-post="fetchComments"
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
import {
  fetchPost,
  fetchComments,
  incrementViews,
  addLike,
  deleteLike,
} from '@/api/posts.js';
import { fetchLike } from '@/api/like.js';

export default {
  data() {
    return {
      postId: '',
      post: {},
      account: {},
      comments: [],
      logMessage: '',
      likeStatus: false,
      isLoading: false,
    };
  },
  created() {
    this.postId = this.$route.params.id;
    this.isLoading = true;
    this.fetchPost();
    this.fetchComments();
    this.incrementViews();
    this.isLoading = false;
  },
  methods: {
    async fetchPost() {
      const { data } = await fetchPost(this.postId);
      this.post = data;
      this.account = this.post.account;
      this.fetchLike();
    },
    async fetchComments() {
      const { data } = await fetchComments(this.postId);
      this.comments = data;
    },
    async incrementViews() {
      await incrementViews(this.postId);
    },
    async fetchLike() {
      const response = await fetchLike(this.postId, this.account.nickName);
      console.log(response);
      this.likeStatus = response.data.result;
    },
    async addLike() {
      const accountInfo = {
        username: this.account.username,
        nickName: this.account.nickName,
      };
      console.log(accountInfo);
      await addLike(this.postId, accountInfo);
    },
    async deleteLike() {
      await deleteLike(this.postId, this.account.nickName);
    },
    changeLikeStatus() {
      if (this.likeStatus === true) {
        this.likeStatus = false;
      } else if (this.likeStatus === false) {
        this.likeStatus = true;
      }
    },
    changeLike() {
      if (this.likeStatus === false) {
        this.addLike();
        this.likeStatus = true;
      } else if (this.likeStatus === true) {
        this.deleteLike();
        this.likeStatus = false;
      }
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
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.title {
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  word-break: break-all;
}

.contents {
  padding: 1rem 0;
  word-break: break-all;
}
</style>
