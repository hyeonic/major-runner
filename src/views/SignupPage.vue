<template>
  <div id="sign-container">
    <div class="sign-header">
      <div class="logo">
        <router-link to="/main">MajorRunner</router-link>
      </div>
    </div>
    <div class="sign-section">
      <signup-form></signup-form>
    </div>
  </div>
</template>

<script>
import SignupForm from '@/components/form/SignupForm.vue';

export default {
  components: {
    SignupForm,
  },
};
</script>

<style scoped>
#sign-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.sign-header {
  flex: 1;
  background-color: #2699fb;
  width: 100%;
  height: 100%;
}

.logo {
  padding-top: 20%;
  text-align: center;
}

.logo > a {
  font-size: 2rem;
  color: white;
  font-family: Berlin Sans FB;
}

.sign-section {
  flex: 4;
}
</style>
