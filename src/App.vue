<template>
  <div id="app">
    <navigation />
    <router-view />
    <main-footer />
  </div>
</template>

<script>
import Navigation from '@/components/components/Navigation.vue';
import MainFooter from '@/components/components/MainFooter.vue';

export default {
  name: 'App',
  components: {
    Navigation, MainFooter,
  },
};
</script>
