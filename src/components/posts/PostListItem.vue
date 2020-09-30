<template>
  <li class="post-li">
    <router-link :to="`/post/${post.id}`">
      <div class="post-header">
        <span class="post-title">{{ post.title }}</span>
        <span class="post-views">{{ post.views }}</span>
      </div>
      <div class="post-footer">
        <span class="post-user">익명</span>
        <span class="post-created">{{
          post.updatedAt[0] +
            '-' +
            post.updatedAt[1] +
            '-' +
            post.updatedAt[2] +
            ' ' +
            post.updatedAt[3] +
            ':' +
            post.updatedAt[4]
        }}</span>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-li {
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
}

.post-title {
  font-size: 1.2rem;
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
  color: #2d76c9;
}
</style>
