<template>
  <section>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  flex: 20;
  padding: 1rem;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
