<template>
  <li class="comment-li">
    <div class="user">{{ comment.account.nickName }}</div>
    <div class="comment">{{ comment.comment }}</div>
    <div class="comment-footer">
      <font-awesome-icon
        v-if="deleteCommentStatus"
        @click="deleteComment"
        :icon="['fas', 'times']"
        :style="{ color: '#2699fb' }"
      />
      <template v-else></template>
      <span class="comment-created">{{ comment.updatedAt | formatDate }}</span>
    </div>
  </li>
</template>

<script>
import { deleteComment } from '@/api/comment.js';

export default {
  props: {
    comment: {
      type: Object,
    },
  },
  data() {
    return {
      userInfo: {},
      deleteCommentStatus: false,
    };
  },
  created() {
    this.fetchedUserInfo();
    this.deleteCommentStatus = this.isLoginUser();
  },
  methods: {
    fetchedUserInfo() {
      this.userInfo = this.$store.getters.fetchedUserInfo;
    },
    isLoginUser() {
      if (this.userInfo.nickName === this.comment.account.nickName) {
        return true;
      } else {
        return false;
      }
    },
    async deleteComment() {
      try {
        const commentId = this.comment.id;
        await deleteComment(commentId);
        this.$emit('reload-post');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.comment-li {
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.comment {
  word-break: break-all;
  padding: 0.3rem 0;
}

.comment-footer {
  display: flex;
}

.comment-created {
  font-size: 0.8rem;
  margin-left: auto;
}
</style>
