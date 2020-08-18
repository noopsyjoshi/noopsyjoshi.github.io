<template>
  <div class="home">
    <!-- <div id="app"> -->
    <homepage-hero />
    <projects />
    <about />
    <contact />
    <main-footer />
  </div>
</template>

<script>
import HomepageHero from '@/components/components/HomepageHero.vue';
import Projects from '@/components/components/Projects.vue';
import About from '@/components/components/About.vue';
import Contact from '@/components/components/Contact.vue';
import MainFooter from '@/components/components/MainFooter.vue';

export default {
  // name: 'App',
  components: {
    HomepageHero,
    Projects,
    About,
    Contact,
    MainFooter,
  },
};
</script>
