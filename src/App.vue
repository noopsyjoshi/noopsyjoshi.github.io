<template>
  <div id="app">
    <!-- <loader /> -->
    <!-- <transition mode="out-in"> -->
    <router-view />
    <!-- </transition> -->
    <main-footer />
  </div>
</template>

<script>
import MainFooter from '@/components/components/MainFooter.vue';
// import Loader from '@/components/components/Loader.vue';

export default {
  name: 'App',
  components: {
    // Loader, 
    MainFooter,
  },
};
</script>
