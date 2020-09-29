<template>
  <li class="post-li">
    <div class="post-header">
      <span class="post-title">test title</span>
      <span class="post-created">2020-09-29</span>
    </div>
    <div class="post-footer">
      <span class="post-user">user@email.com</span>
      <span class="post-views">1004</span>
    </div>
  </li>
</template>

<script>
export default {
  //   props: {
  //     post,
  //   },
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
</style>
