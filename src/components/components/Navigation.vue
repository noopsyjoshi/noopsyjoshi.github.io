<template>
  <nav class="navigation" role="navigation">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="navigation__flex">
          <button
              v-scroll-to="{ el: '#hero', duration: 2000, easing: [0.64, 0, 0.78, 0] }"
              class="link d-split navigation__button navigation__button--no-spacer"
          >
            <smiley class="navigation__icon" />noops
          </button>
          <div class="toggle-color">
            <button data-bg-color="light" class="link toggle-color__btn">
              <Light />
            </button>
            <button data-bg-color="dark" class="link toggle-color__btn">
              <Dark />
            </button>
            <button data-bg-color="teal" class="link toggle-color__btn">
              <Teal />
            </button>
          </div>
          <div class="navigation__block">
            <ul class="navigation__links">
              <li v-for="(link, index) in links" :key="index" class="link navigation__link">
                <button
                    v-scroll-to="{ 
                      el: link.path,
                      duration: 2000,
                      easing: [0.64, 0, 0.78, 0] 
                    }"
                    class="d-split navigation__button"
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
@import '@/assets/scss/atomic/elements/_toggle-color.scss';
</style>

<script>
import ScrollTo from '@/utils/scrollTo.js';
import Smiley from '@/assets/icons/smiley.svg';
import Dark from '@/assets/images/swatches/dark.svg';
import Light from '@/assets/images/swatches/light.svg';
import Teal from '@/assets/images/swatches/teal.svg';

export default {
  components: {
    Smiley, Dark, Light, Teal,
  },
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
  created() {
    ScrollTo();
  },
};
</script>
