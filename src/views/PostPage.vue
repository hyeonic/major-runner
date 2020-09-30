<template>
  <div id="wrap">
    <div class="post-header">
      <font-awesome-icon
        class="user-icon"
        :icon="['far', 'user']"
        :style="{ color: '#2699fb' }"
      />
      <div calss="post-info">
        <div class="user">{{ account.nickName || 'test' }}</div>
        <div class="created">{{ post.created || '2020-09-10' }}</div>
      </div>
      <font-awesome-icon
        class="like-icon"
        :icon="['fas', 'thumbs-up']"
        :style="{ color: '#2699fb' }"
      />
    </div>
    <div class="post-section">
      <div class="title">test title</div>
      <div class="contents">
        test contents
      </div>
    </div>
    <div class="post-comments">
      <div class="write-comment">
        <comment-add-form></comment-add-form>
      </div>
    </div>
  </div>
</template>

<script>
import CommentAddForm from '@/components/form/CommentAddForm.vue';
import { fetchPost } from '@/api/posts.js';

export default {
  data() {
    return {
      post: {},
      account: {},
      logMessage: '',
    };
  },
  created() {
    fetchPost();
  },
  methods: {
    async fetchPost() {
      try {
        const id = this.$route.params.id;
        const { data } = await fetchPost(id);

        this.post = data;
      } catch (error) {
        this.logMessage = error.response.data.message;
      }
    },
  },
  components: {
    CommentAddForm,
  },
};
</script>

<style scoped>
.post-header {
  display: flex;
}

.user-icon {
  font-size: 2rem;
}

.post-info {
  margin-left: 0.5rem;
}

.like-icon {
  margin-left: auto;
  font-size: 2rem;
}

.user {
  font-weight: bold;
  padding-left: 0.5rem;
}

.created {
  padding-left: 0.5rem;
  font-size: 0.8rem;
}

.post-section {
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
}

.title {
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
}

.contents {
  padding-top: 0.5rem;
}
</style>
