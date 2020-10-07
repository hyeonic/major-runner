<template>
  <div>
    <user-category-add-form
      @add-category="addCategory"
    ></user-category-add-form>
    <div class="category-section">
      <ul class="ul-category" v-if="selectCategories.length !== 0">
        <category-list-item
          v-for="(category, index) in selectCategories"
          :key="index"
          :category="category"
          @remove-category="removeCategory"
        ></category-list-item>
      </ul>
      <div class="else-category" v-else>
        선호하는 카테고리를 선택하세요!
      </div>
    </div>
    <div class="category-footer">
      <div class="action-create" @click="createAccountInfo">save</div>
    </div>
  </div>
</template>

<script>
import UserCategoryAddForm from '@/components/form/UserCategoryAddForm.vue';
import CategoryListItem from '@/components/list/CategoryListItem.vue';
import { createAccountInfo } from '@/api/accountInfo.js';

export default {
  data() {
    return {
      account: {},
      selectCategories: [],
    };
  },
  created() {
    this.account = this.$store.getters.fetchedUserInfo;
  },
  methods: {
    async createAccountInfo() {
      const accountInfo = {
        account: this.account,
        categories: this.selectCategories,
      };
      await createAccountInfo(accountInfo);
      this.$router.push('/main');
    },

    addCategory(category) {
      let isDone = true;
      for (const cat of this.selectCategories) {
        // for of 반복문 : [Symbol.iterator] 속성을 가지는 컬렉션 전용
        if (cat.id === category.id) {
          isDone = false;
        }
      }

      if (isDone) {
        this.selectCategories.push(category);
      }
    },
    removeCategory(category) {
      const index = this.selectCategories.indexOf(category);
      if (index > -1) {
        this.selectCategories.splice(index, 1);
      }
    },
  },
  components: {
    UserCategoryAddForm,
    CategoryListItem,
  },
};
</script>

<style scoped>
.category-section {
  border: 1px solid #ccc;
  border-radius: 20px;
  min-height: 10rem;
  margin-bottom: 2rem;
  color: #2d76c9;
}

.ul-category {
  padding: 1rem;
}

.else-category {
  margin-top: 20%;
  text-align: center;
  color: #2699fb;
}

.action-create {
  text-align: center;
  margin-bottom: 0.5rem;
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: bold;
  color: whitesmoke;
  background-color: #2699fb;
  border: 1px solid #2699fb;
  border-radius: 20px;
}

.action-create:focus {
  outline: none;
}
</style>
