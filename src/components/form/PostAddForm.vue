<template>
  <div id="wrap">
    <form id="form" @submit.prevent="submitForm">
      <div class="item">
        <input
          id="title"
          type="text"
          v-model="title"
          placeholder="제목을 입력하세요"
        />
      </div>
      <div class="item">
        <textarea
          id="contents"
          type="text"
          rows="5"
          v-model="contents"
          placeholder="내용을 입력하세요"
        />
        <p class="validation-text" v-if="!isContentsValid">
          Contents must be less then 200
        </p>
      </div>
      <select v-model="category">
        <option disabled value="">카테고리를 골라주세요!</option>
        <option value="100">전공</option>
        <option value="200">취업</option>
        <option value="300">대외활동</option>
        <option value="400">스터디</option>
        <option value="500">생활 정보</option>
        <option value="600">시사 이슈</option>
        <option value="700">오늘 뭐하지?</option>
        <!-- <option value="101">전공/경영, 사무</option>
        <option value="102">전공/영업, 고객상담</option>
        <option value="103">전공/it, 네트워크</option>
        <option value="104">전공/디자인</option>
        <option value="105">전공/서비스</option>
        <option value="106">전공/전문직</option>
        <option value="107">전공/의료</option>
        <option value="108">전공/생산, 제조</option>
        <option value="109">전공/건설</option>
        <option value="110">전공/유통, 무역</option>
        <option value="111">전공/미디어</option>
        <option value="112">전공/교육</option> -->
      </select>
      <div class="comment">
        <transition name="fade" mode="in-out">
          <button v-if="commentStatus === 'SHOW'" @click="changeComent">
            comment O
          </button>
          <button v-if="commentStatus === 'HIDE'" @click="changeComent">
            comment X
          </button>
        </transition>
      </div>
      <button class="action-create" type="submit">save</button>
    </form>
    <p class="log-message">{{ logMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      contents: '',
      username: '',
      commentStatus: 'SHOW',
      category: '',
      comment: [],
      like: [],
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  created() {
    this.username = this.$store.getters.fetchedUser;
  },
  methods: {
    changeComent() {
      if (this.commentStatus === 'SHOW') {
        this.commentStatus = 'HIDE';
      } else if (this.commentStatus === 'HIDE') {
        this.commentStatus = 'SHOW';
      }
    },
    submitForm() {},
  },
};
</script>

<style scoped>
/* #wrap {
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 1rem;
} */

.title {
  text-align: center;
}

#form {
  width: 100%;
}

.item {
  width: 100%;
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

textarea,
input {
  margin: 0.5rem 0;
  border: 2px solid #2699fb;
  border-radius: 20px;
}

textarea:focus,
input:focus {
  outline: none;
}

select {
  border: 2px solid #2699fb;
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

.comment > button {
  border-radius: 20px;
  border: 2px solid #2699fb;
  padding: 0.5rem;
  color: #2699fb;
}

.comment > button:focus {
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
