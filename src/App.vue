<template>
  <div id="app">
    <app-header></app-header>
    <app-section></app-section>
    <app-footer></app-footer>

    <button class="action-edit">+</button>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import AppSection from '@/components/common/AppSection.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppSection,
  },
};
</script>

<style>
@import './css/reset.css';

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.action-edit {
  position: fixed;
  font-size: 2rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  bottom: 10rem;
  right: 3rem;
}
</style>
