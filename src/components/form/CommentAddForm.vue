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
    };
  },
  methods: {
    async submitForm() {
      try {
        const { data } = await createComment(this.postId, {
          comment: this.comment,
        });
        console.log(data);
        this.$router.go(this.$route.path);
      } catch (error) {
        this.logMessage = error.response.data.message;
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
  border-bottom: 1px solid #ccc;
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
</style>
