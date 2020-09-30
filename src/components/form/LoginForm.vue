<template>
  <form @submit.prevent="submitForm">
    <div class="input-wrap">
      <input
        class="input-login"
        type="text"
        v-model="username"
        placeholder="아이디"
      />
    </div>
    <p class="validation-text">
      <span class="warning" v-if="!isUserNameValid && username">
        email 형식으로 기입하세요.
      </span>
    </p>
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
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form value
      username: '',
      password: '',

      // Log
      logMessage: '',
    };
  },
  computed: {
    isUserNameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };

        await this.$store.dispatch('LOGIN', userData);
        this.$router.push('/main');
      } catch (error) {
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
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

.warning {
  display: inline-block;
  width: 100%;
  text-align: center;
  color: crimson;
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
