<template>
  <div class="home">
    <custom-cursor />
    <div class="bg-body bg--orange-light">
      <navigation />
      <homepage-hero />
      <projects />
      <about />
      <contact />
      <footer-item link="#home" />
    <!-- <custom-cursor /> -->
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/components/Navigation.vue';
import HomepageHero from '@/components/components/HomepageHero.vue';
import Projects from '@/components/components/Projects.vue';
import About from '@/components/components/About.vue';
import Contact from '@/components/components/Contact.vue';
import FooterItem from '@/components/elements/FooterItem.vue';
import CustomCursor from '@/components/elements/CustomCursor.vue';

export default {
  // name: 'App',
  components: {
    CustomCursor, 
    Navigation,
    HomepageHero,
    Projects,
    About,
    Contact,
    FooterItem,
  },
};
</script>
