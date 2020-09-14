<template>
  <div id="app">
    <app-header></app-header>
    <router-view class="section"></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style>
@import './css/reset.css';

.section {
  padding: 1rem;
}
</style>
