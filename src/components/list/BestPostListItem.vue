<template>
  <li class="post-li">
    <router-link :to="`/post/${post.id}`">
      <div class="post-header">
        <span class="post-title">{{ post.title }}</span>
        <span class="post-views">{{ post.views }}</span>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.post-li {
  margin: 0.5rem 0;
  padding: 0 0 0.5rem 0;
  border-bottom: 1px solid #f1f9ff;
}

.post-title {
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
