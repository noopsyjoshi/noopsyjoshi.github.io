<template>
  <div id="app" data-scroll-container>
    <div id="page-wrap">
      <navigation />
      <custom-cursor />
      <!-- <home /> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/components/Navigation.vue';
import CustomCursor from '@/components/elements/CustomCursor.vue';

// import Home from '@/views/Home.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    CustomCursor,
    // Home,
  },
};
</script>
