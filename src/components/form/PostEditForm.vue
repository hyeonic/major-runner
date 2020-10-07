<template>
  <div id="wrap">
    <loading-spinner v-if="isLoading"></loading-spinner>
    <form id="form" @submit.prevent="submitForm">
      <div class="item">
        <input
          id="title"
          type="text"
          v-model="title"
          placeholder="제목을 입력하세요"
        />
        <textarea
          id="contents"
          type="text"
          rows="10"
          v-model="contents"
          placeholder="내용을 입력하세요"
        />
        <p class="validation-text" v-if="!isContentsValid">
          Contents must be less then 200
        </p>
      </div>
      <select class="selection" v-model="category">
        <option disabled value="">카테고리를 골라주세요!</option>
        <option
          v-for="(category, index) in categories"
          :key="index"
          :value="category"
        >
          {{ category.categoryName + ' / ' + category.subCategoryName }}
        </option>
      </select>
      <div class="comment">
        <transition name="fade" mode="in-out">
          <div v-if="commentStatus === 'SHOW'" @click="changeComent">
            comment O
          </div>
          <div v-if="commentStatus === 'HIDE'" @click="changeComent">
            comment X
          </div>
        </transition>
      </div>
      <button class="action-create" type="submit">edit</button>
    </form>
    <p class="log-message">{{ logMessage }}</p>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchAllCategories } from '@/api/category.js';
import { fetchPost, editPost } from '@/api/posts.js';

export default {
  data() {
    return {
      postId: '',
      title: '',
      contents: '',
      uesrname: '',
      nickName: '',
      commentStatus: 'SHOW',
      category: '',
      logMessage: '',
      categories: [],
      isLoading: false,
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  created() {
    this.postId = this.$route.params.id;
    const userInfo = this.$store.getters.fetchedUserInfo;
    this.username = userInfo.username;
    this.nickName = userInfo.nickName;
    this.fetchPost();
    this.fetchAllCategories();
  },
  methods: {
    changeComent() {
      if (this.commentStatus === 'SHOW') {
        this.commentStatus = 'HIDE';
      } else if (this.commentStatus === 'HIDE') {
        this.commentStatus = 'SHOW';
      }
    },
    async fetchPost() {
      const { data } = await fetchPost(this.postId);
      this.title = data.title;
      this.contents = data.contents;
    },
    async submitForm() {
      const post = {
        title: this.title,
        contents: this.contents,
        account: {
          username: this.username,
          password: '',
          nickName: '',
        },
        commentStatus: this.commentStatus,
        category: this.category,
      };
      try {
        await editPost(this.postId, post);
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
      }
    },
    async fetchAllCategories() {
      this.isLoading = true;
      const { data } = await fetchAllCategories();
      this.isLoading = false;
      this.categories = data;
    },
  },
  components: {
    LoadingSpinner,
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}

#form {
  width: 100%;
}

.item {
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border: 1px solid #2699fb;
  border-radius: 20px;
}

.item > input {
  border-bottom: 1px solid #ccc;
}

#title {
  width: 100%;
  padding: 0.5rem;
}

#contents {
  width: 100%;
  max-width: 100%;
  padding: 0.5rem;
}

/* textarea,
input {
  margin: 0.5rem 0;
  border: 2px solid #2699fb;
  border-radius: 20px;
} */

textarea:focus,
input:focus {
  outline: none;
}

select {
  border: 1px solid #2699fb;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 20px;
  width: 100%;
}

select:focus {
  outline: none;
}

.comment {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.comment > div {
  display: inline-block;
  border-radius: 20px;
  border: 1px solid #2699fb;
  padding: 0.5rem;
  color: #2699fb;
}

.comment > div:focus {
  outline: none;
}

.action-create {
  margin-top: 1rem;
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: bold;
  color: whitesmoke;
  background-color: #2699fb;
  border: 1px solid #2699fb;
  border-radius: 20px;
}

.action-create:hover {
  color: #2699fb;
  background-color: whitesmoke;
}

.action-create:focus {
  outline: none;
}

.log-message {
  margin-top: 1rem;
  color: red;
}
</style>
