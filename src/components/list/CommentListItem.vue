<template>
  <li class="comment-li">
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
  border-bottom: 1px solid #ccc;
}
</style>
