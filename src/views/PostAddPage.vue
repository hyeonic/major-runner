<template>
  <div id="post-add-container">
    <post-add-form></post-add-form>
  </div>
</template>

<script>
import PostAddForm from '@/components/form/PostAddForm.vue';
export default {
  components: {
    PostAddForm,
  },
};
</script>

<style scoped>
#post-add-container {
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
