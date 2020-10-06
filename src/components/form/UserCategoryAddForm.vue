<template>
  <div id="wrap">
    <loading-spinner v-if="isLoading"></loading-spinner>
    <form id="form" @submit.prevent="submitForm">
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
      <button class="submit-btn" type="submit" :disabled="category === ''">
        add category
      </button>
    </form>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchAllCategories } from '@/api/category.js';

export default {
  data() {
    return {
      category: '',
      categories: [],
      isLoading: false,
    };
  },
  created() {
    this.fetchAllCategories();
  },
  methods: {
    submitForm() {
      this.$emit('add-category', this.category);
      this.initForm();
    },
    initForm() {
      this.category = '';
    },
    async fetchAllCategories() {
      this.isLoading = true;
      const { data } = await fetchAllCategories();
      this.categories = data;
      this.isLoading = false;
    },
  },
  components: {
    LoadingSpinner,
  },
};
</script>

<style scoped>
#form {
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

.submit-btn {
  text-align: center;
  margin-bottom: 1rem;
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: bold;
  color: whitesmoke;
  background-color: #2699fb;
  border: 1px solid #2699fb;
  border-radius: 20px;
}

.submit-btn:focus {
  outline: none;
}
</style>
