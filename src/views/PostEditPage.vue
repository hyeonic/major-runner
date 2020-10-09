<template>
  <div id="post-edit-container">
    <post-edit-form></post-edit-form>
  </div>
</template>

<script>
import PostEditForm from '@/components/form/PostEditForm.vue';
export default {
  components: {
    PostEditForm,
  },
};
</script>

<style scoped>
#post-edit-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
}
</style>
