<template>
  <form id="form" @submit.prevent="">
    <div class="form-wrap">
      <input type="text" placeholder="댓글을 작성하세요!" />
      <div class="send-icon-wrap" type="submit">
        <font-awesome-icon
          class="send-icon"
          :icon="['fas', 'arrow-up']"
          :style="{ color: '#2699fb' }"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {};
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
</style>
