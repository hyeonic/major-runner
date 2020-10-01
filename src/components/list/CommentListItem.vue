<template>
  <li class="comment-li">
    <div class="user">{{ comment.account.nickName }}</div>
    <div class="comment">{{ comment.comment }}</div>
    <div class="comment-created">{{ comment.updatedAt | formatDate }}</div>
  </li>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
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

.comment-created {
  font-size: 0.8rem;
  text-align: right;
}
</style>
