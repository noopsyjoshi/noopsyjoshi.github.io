<template>
  <section :key="componentKey">
    <div class="project" data-scroll-speed="10" data-scroll-container>
      <div class="row">
        <div class="col-10 offset-1">
          <div class="project__close-wrapper">
            <router-link class="project__close link" :to="{ name: 'home'}">
              <close />
            </router-link>
          </div>
          <div class="project__intro-block">
            <h1 data-aos="slide-up-text" class="d-split project__title">
              Paper London
            </h1>
          </div>
          <figure data-aos="reveal-image-right" class="reveal-image-right reveal-image-right--light">
            <img data-aos="zoom-image" class="project__image project__image--showcase reveal-image" data-sampler="planeTexture" src="@/assets/images/paperlondon/paper-01.jpg">
          </figure>

          <div class="project__image-grid">
            <img src="@/assets/images/paperlondon/paper-02.jpg" alt="paper london" class="project__image">
            <img src="@/assets/images/paperlondon/paper-03.jpg" alt="paper london" class="project__image">
            <img src="@/assets/images/paperlondon/paper-04.jpg" alt="paper london" class="project__image">
            <img src="@/assets/images/paperlondon/paper-05.jpg" alt="paper london" class="project__image">
          </div>
        </div>
        <div class="col-10 offset-1">
          <p data-aos="slide-up-body" class="d-split project__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          <ul data-aos="slide-up-body" class="d-split project__tech-list">
            <li class="project__tech">JavaScript</li>
            <li class="project__tech">HTML</li>
            <li class="project__tech">SCSS</li>
            <li class="project__tech">Shopify</li>
            <li class="project__tech">Liquid</li>
            <li class="project__tech">AJAX</li>
            <li class="project__tech">Sketch</li>
            <li class="project__tech">Jira</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.min.css';
import '@/assets/scss/atomic/components/_project.scss';
import Close from '@/components/elements/Close.vue';

export default {
  components: {
    Close,
  },

  data() {
    return {
      componentKey: 0,
    };
  },

  created() {
    document.body.classList.add('bg--white');
  },

  mounted() {
    // this.scroll = new LocomotiveScroll({
    //   el: document.querySelector('[data-scroll-container]'),
    //   smooth: true,
    //   class: 'is-inview',
    // });

    // this.scroll.init();
  },

  destroyed() {
    // this.scroll.destroy();
  },

  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
  },
};

</script>
