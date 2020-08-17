<template>
  <div id="app">
    <div>
      <navigation />
      <!-- <home /> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/components/Navigation.vue';
// import Home from '@/views/Home.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    // Home,
  },
};
</script>
