<template>
  <div id="wrap">
    <div class="not-found-section">
      <div class="section-icon">
        <font-awesome-icon
          :icon="['far', 'frown']"
          :style="{ color: '#2699fb' }"
        />
        <div class="not-found-message">
          <div>
            요청하신 페이지를 찾을 수 없습니다.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section-icon {
  text-align: center;
  width: 100%;
  margin-top: 30%;
}
.section-icon > svg {
  width: 50%;
  height: 100%;
}

.not-found-message {
  margin: 1rem 0;
  font-size: 110%;
  color: #2d76c9;
  font-weight: bold;
}
</style>
