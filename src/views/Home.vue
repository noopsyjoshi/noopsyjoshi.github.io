<template>
  <div data-scroll-container class="home">
    <custom-cursor cursor-color="white" />
    <navigation />
    <homepage-hero />
    <projects />
    <about />
    <contact />
    <footer-item link="#home" />
  </div>
</template>

<script>
import CustomCursor from '@/components/elements/CustomCursor.vue';
import Navigation from '@/components/components/Navigation.vue';
import HomepageHero from '@/components/components/HomepageHero.vue';
import Projects from '@/components/components/Projects.vue';
import About from '@/components/components/About.vue';
import Contact from '@/components/components/Contact.vue';
import FooterItem from '@/components/elements/FooterItem.vue';

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
  created() {
  },
};
</script>
