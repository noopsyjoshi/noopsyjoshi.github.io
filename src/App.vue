<template>
  <div id="app">
    <router-view />
    <main-footer />
  </div>
</template>

<script>
import MainFooter from '@/components/components/MainFooter.vue';

export default {
  name: 'App',
  components: {
    MainFooter,
  },
};
</script>
