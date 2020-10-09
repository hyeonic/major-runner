<template>
  <div id="login-container">
    <div class="back-icon">
      <font-awesome-icon
        @click="$router.back()"
        :icon="['fas', 'arrow-left']"
        :style="{ color: 'whitesmoke' }"
      />
    </div>
    <div class="login-header">
      <div class="logo">
        <router-link to="/main">MajorRunner</router-link>
      </div>
    </div>
    <div class="login-section">
      <login-form></login-form>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/form/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
#login-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.back-icon {
  padding: 0.5rem;
  background-color: #2699fb;
}

.login-header {
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

.login-section {
  flex: 4;
}
</style>
