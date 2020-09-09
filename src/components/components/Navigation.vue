<template>
  <nav class="navigation" role="navigation">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="navigation__flex">
          <button v-scroll-to="{ 
            el: '#hero',
          }" class="link d-split navigation__button navigation__button--no-spacer"
          >
            Noops
          </button>
          <div class="navigation__block">
            <ul class="navigation__links">
              <li v-for="(link, index) in links" :key="index" class="link navigation__link">
                <button v-scroll-to="{ 
                  el: link.path,
                }" class="d-split navigation__button"
                >
                  {{ link.name }}
                </button>
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
import ScrollTo from '@/utils/scrollTo.js';

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

  created() {
    ScrollTo();
  },

  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
