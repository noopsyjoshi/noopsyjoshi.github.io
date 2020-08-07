<template>
  <div id="app">
    <navigation></navigation>
    <homepage-hero></homepage-hero>
     <!-- <projects></projects> -->
      <about></about>
<contact></contact>
<main-footer></main-footer>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import HomepageHero from '../components/HomepageHero.vue'
// import Projects from '../components/Projects.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import MainFooter from '../components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    HomepageHero,
    // Projects,
    About,
    Contact,
    MainFooter
  }
}
</script>
