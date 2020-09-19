<template>
  <form @submit.prevent="">
    <div class="input-wrap">
      <input
        class="input-login"
        type="text"
        v-model="username"
        placeholder="아이디"
      />
    </div>
    <div class="input-wrap">
      <input
        class="input-login"
        type="password"
        v-model="password"
        placeholder="비밀번호"
      />
    </div>
    <div class="log-message">
      {{ logMessage }}
    </div>
    <div class="button-wrap">
      <button type="submit">Run!</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      // form value
      username: '',
      password: '',

      // Log
      logMessage: '--',
    };
  },
};
</script>

<style scoped>
.input-wrap {
  padding: 4%;
  width: 90%;
  border: 2px solid #bce0fd;
  border-radius: 50px;
  margin: 2rem auto 1rem auto;
}
.input-login {
  font-size: 1rem;
  width: 95%;
  color: #2699fb;
}

.input-login::placeholder {
  color: #bce0fd;
}

.input-login:focus {
  outline: none;
}

.log-message {
  text-align: center;
  padding: 10%;
}

.button-wrap {
  width: 90%;
  border: 2px solid #bce0fd;
  border-radius: 50px;
  margin: 2rem auto 1rem auto;
}

.button-wrap > button {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 50px;
  background-color: #2699fb;
  padding: 4%;
  font-size: 1rem;
  color: white;
}

.button-wrap > button:focus {
  outline: none;
}
</style>
