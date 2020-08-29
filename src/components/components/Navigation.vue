<template>
  <nav class="navigation" role="navigation">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="navigation__flex">
          <div class="navigation__icon">
            <h1 class="navigation__logo">n.</h1>
          </div>
          <div class="navigation__block">
            <ul class="navigation__links">
              <li v-for="(link, index) in links" :key="index" class="link navigation__link">
                <a data-aos="slide-up-body" class="d-split navigation__anchor" :href="link.path">{{ link.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import '@/assets/scss/atomic/components/_navigation.scss';
</style>

<script>
export default {
  props: {
    links: {
      type: Array,
      default() {
        return [
          {
            name: 'Projects',
            path: '#projects',
          },
          {
            name: 'About',
            path: '#about',
          },
          {
            name: 'Contact',
            path: '#contact',
          },
        ];
      },
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
