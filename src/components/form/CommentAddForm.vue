<template>
  <form id="form" @submit.prevent="submitForm">
    <div class="form-wrap">
      <input type="text" v-model="comment" placeholder="댓글을 작성하세요!" />
      <button class="send-icon-wrap" type="submit">
        <font-awesome-icon
          class="send-icon"
          :icon="['fas', 'arrow-up']"
          :style="{ color: '#2699fb' }"
        />
      </button>
    </div>
    <p class="validation-text">
      <span class="warning">
        {{ logMessage }}
      </span>
    </p>
  </form>
</template>

<script>
import { createComment } from '@/api/posts.js';

export default {
  props: {
    postId: {
      type: String,
    },
  },
  data() {
    return {
      comment: '',
      logMessage: '',
      userInfo: {},
    };
  },
  created() {
    const userInfo = this.$store.getters.fetchedUserInfo;
    this.userInfo.username = userInfo.username;
    this.userInfo.nickName = userInfo.nickName;
  },
  methods: {
    async submitForm() {
      try {
        await createComment(this.postId, {
          comment: this.comment,
          account: {
            username: this.userInfo.username,
            nickName: this.userInfo.nickName,
            password: '',
          },
        });
        this.comment = '';
        this.$emit('reload-post');
      } catch (error) {
        this.logMessage = '로그인 후 작성해 주세요.';
      }
    },
  },
};
</script>

<style scoped>
.form-wrap {
  display: flex;
  padding: 0.5rem 0;
}

input {
  width: 90%;
  padding: 0.5rem;
}

input:focus {
  outline: none;
  border-bottom: 1px solid #e0e0e0;
}

.send-icon-wrap {
  width: 10%;
  padding: 0.5rem;
  text-align: center;
}

button {
  border: 0;
  background: none;
}

.warning {
  display: inline-block;
  width: 100%;
  text-align: center;
  color: crimson;
}
</style>
