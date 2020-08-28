<template>
  <div class="scroll-container home">
    <!-- <custom-cursor cursor-color="white" /> -->
    <homepage-hero />
    <projects />
    <about />
    <contact />
  </div>
</template>

<script>
// import CustomCursor from '@/components/elements/CustomCursor.vue';
import HomepageHero from '@/components/components/HomepageHero.vue';
import Projects from '@/components/components/Projects.vue';
import About from '@/components/components/About.vue';
import Contact from '@/components/components/Contact.vue';
export default {
  // name: 'App',
  components: {
    // CustomCursor,
    HomepageHero,
    Projects,
    About,
    Contact,
  },
  created() {
  },
};
</script>
