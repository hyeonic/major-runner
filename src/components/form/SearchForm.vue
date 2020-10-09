<template>
  <form id="search-bar" @submit="submitForm">
    <input
      class="input-search"
      type="text"
      v-model="searchData"
      placeholder="게시글 검색"
    />
    <span>
      <template v-if="searchData.length > 0">
        <font-awesome-icon
          @click="initForm"
          :icon="['fas', 'times']"
          :style="{ color: '#2699fb' }"
        />
      </template>
    </span>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchData: '',
    };
  },
  methods: {
    submitForm() {
      this.$router.push(`/search/${this.searchData}`);
    },
    initForm() {
      this.searchData = '';
    },
  },
};
</script>

<style scoped>
#search-bar {
  padding: 0.5rem 1rem;
  width: 95%;
  border: 2px solid #2d76c9;
  border-radius: 20px;
  margin: 0 auto 0.5rem auto;
}

.input-search {
  font-size: 1rem;
  width: 95%;
}

.input-search:focus {
  outline: none;
}

#search-bar > span {
  display: inline-block;
  width: 5%;
}
</style>
