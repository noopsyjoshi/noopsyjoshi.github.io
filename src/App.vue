<template>
  <div id="app">
    <!-- <transition mode="out-in"> -->
    <router-view />
    <!-- </transition> -->
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
