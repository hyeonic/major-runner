<template>
  <div id="wrap">
    <loading-spinner v-if="isLoading"></loading-spinner>
    <template v-else>
      <div class="post-header">
        <font-awesome-icon
          class="user-icon"
          :icon="['far', 'user']"
          :style="{ color: '#2699fb' }"
        />
        <div calss="post-info">
          <div class="user">{{ account.nickName }}</div>
          <span class="created">{{ postUpdatedAt }}</span>
        </div>
        <font-awesome-icon
          v-if="likeStatus"
          class="like-icon"
          @click="changeLike"
          :icon="['fas', 'thumbs-up']"
          :style="{ color: '#2699fb' }"
        />
        <font-awesome-icon
          v-else
          class="like-icon"
          @click="changeLike"
          :icon="['far', 'thumbs-up']"
          :style="{ color: '#2699fb' }"
        />
      </div>
      <div class="post-section">
        <div class="title">{{ post.title }}</div>
        <div class="contents">
          {{ post.contents }}
        </div>
        <div class="post-icon" v-if="postAuth">
          <font-awesome-icon
            class="trash"
            @click="deletePost"
            :icon="['far', 'trash-alt']"
            :style="{ color: '#2699fb' }"
          />
          <router-link :to="`/post/edit/${postId}`"
            ><font-awesome-icon
              class="edit"
              :icon="['far', 'edit']"
              :style="{ color: '#2699fb' }"
          /></router-link>
        </div>
      </div>
      <div class="comment-section" v-if="commentStatus === 'SHOW'">
        <div class="write-comment">
          <comment-add-form
            @reload-post="fetchComments"
            :postId="postId"
          ></comment-add-form>
        </div>
        <div class="post-comments">
          <div class="comment-list">
            <ul>
              <comment-list-item
                v-for="(comment, index) in comments"
                :key="index"
                :comment="comment"
                @reload-post="fetchComments"
              ></comment-list-item>
            </ul>
          </div>
        </div>
      </div>
      <div class="comment-hide" v-else>
        작성자가 댓글 사용을 중지하였습니다.
      </div>
    </template>
  </div>
</template>

<script>
import CommentAddForm from '@/components/form/CommentAddForm.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import CommentListItem from '@/components/list/CommentListItem.vue';
import {
  fetchPost,
  deletePost,
  fetchComments,
  incrementViews,
  addLike,
  deleteLike,
} from '@/api/posts.js';
import { fetchLike } from '@/api/like.js';
import { formatDate } from '@/utils/filters.js';

export default {
  data() {
    return {
      postId: '',
      post: {},
      account: {},
      comments: [],
      commentStatus: '',
      postAuth: false,
      postUpdatedAt: '',
      logMessage: '',
      likeStatus: false,
      isLoading: false,
    };
  },
  created() {
    this.postId = this.$route.params.id;
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      try {
        this.isLoading = true;
        const { data } = await fetchPost(this.postId);
        this.post = data;
        this.account = this.post.account;
        this.commentStatus = this.post.commentStatus;
        this.fetchComments();
        this.incrementViews();
        this.fetchLike();
        this.dateFilter();
        this.isLoginUser();
        this.isLoading = false;
      } catch (error) {
        this.$router.push('/not-found');
      }
    },
    async deletePost() {
      const tf = confirm('게시글을 삭제하시겠습니까?');
      if (tf === true) {
        await deletePost(this.postId);
        this.$router.push('/main');
      }
    },
    async fetchComments() {
      try {
        const { data } = await fetchComments(this.postId);
        this.comments = data;
      } catch (error) {
        this.$router.push('/not-found');
      }
    },
    async incrementViews() {
      try {
        await incrementViews(this.postId);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchLike() {
      try {
        const response = await fetchLike(this.postId, this.account.nickName);
        this.likeStatus = response.data.result;
      } catch (error) {
        console.log(error);
      }
    },
    async addLike() {
      try {
        const accountInfo = {
          username: this.account.username,
          nickName: this.account.nickName,
        };
        await addLike(this.postId, accountInfo);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteLike() {
      try {
        await deleteLike(this.postId, this.account.nickName);
      } catch (error) {
        console.log(error);
      }
    },
    changeLikeStatus() {
      if (this.likeStatus === true) {
        this.likeStatus = false;
      } else if (this.likeStatus === false) {
        this.likeStatus = true;
      }
    },
    changeLike() {
      if (this.likeStatus === false) {
        this.addLike();
        this.likeStatus = true;
      } else if (this.likeStatus === true) {
        this.deleteLike();
        this.likeStatus = false;
      }
    },
    isLoginUser() {
      const userInfo = this.$store.getters.fetchedUserInfo;
      if (userInfo.nickName === this.account.nickName) {
        this.postAuth = true;
      } else {
        this.postAuth = false;
      }
    },
    dateFilter() {
      this.postUpdatedAt = formatDate(this.post.updatedAt);
    },
  },
  components: {
    CommentAddForm,
    CommentListItem,
    LoadingSpinner,
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
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.title {
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  word-break: break-all;
}

.contents {
  padding: 1rem 0;
  word-break: break-all;
}

.post-icon {
  text-align: right;
}

.trash,
.edit {
  margin-left: 1rem;
}

.comment-hide {
  text-align: center;
  padding: 1rem;
}
</style>
