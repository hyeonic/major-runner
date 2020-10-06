<template>
  <li class="li-category">
    <span>{{ makeList() }}</span>
    <font-awesome-icon
      @click="removeCategory"
      :icon="['fas', 'minus']"
      :style="{ color: '#2699fb' }"
    />
  </li>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
    },
  },
  methods: {
    removeCategory() {
      this.$emit('remove-category', this.category);
    },
    makeList() {
      if (this.category.subCategoryName === '') {
        return this.category.categoryName;
      } else if (this.category.subCategoryName !== '') {
        return (
          this.category.categoryName + ' / ' + this.category.subCategoryName
        );
      }
    },
  },
};
</script>

<style scoped>
.li-category > svg {
  margin-left: 1rem;
}
</style>
