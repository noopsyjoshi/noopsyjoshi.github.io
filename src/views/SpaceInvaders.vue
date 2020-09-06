<template>
  <section :key="componentKey" class="project">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="close__wrapper">
          <router-link class="close__link link" :to="{ name: 'home'}">
            <close />
          </router-link>
        </div>
        <div class="project__intro-block">
          <h1 data-aos="slide-up-text" class="d-split project__title">Space Invaders</h1>
        </div>
        <figure
            data-aos="reveal-image-right"
            class="project__figure reveal-image-right reveal-image-right--light"
        >
          <img
              data-aos="zoom-image"
              class="project__image project__image--showcase reveal-image"
              data-sampler="planeTexture"
              src="@/assets/images/collective/collective-01.jpg"
          >
        </figure>
      </div>
      <div class="col-10 offset-1 col-md-7 offset-md-2">
        <p
            data-aos="fade-in"
            data-aos-easing="smooth"
            data-aos-duration="1000"
            class="project__body"
        >
          The project was to collaborate in a team of six developers to build a website for 'The Collective', a group of thoughtful co-living spaces situated around London. The websites embraces colourful components, fun carousels and use of animating svg shapes. The frontend is built using Vue.js, HTML and SCSS and uses Kentico for content management.
        </p>
      </div>
      <div class="col-10 offset-1">
        <div class="project__image-grid">
          <figure class="project__image-wrapper">
            <img
                data-aos=""
                src="@/assets/images/collective/collective-02.jpg"
                alt="paper london"
                class="project__image"
            >
          </figure>
          <figure class="project__image-wrapper">
            <img
                data-aos=""
                src="@/assets/images/collective/collective-05.jpg"
                alt="paper london"
                class="project__image"
            >
          </figure>
          <figure class="project__image-wrapper">
            <img
                data-aos=""
                src="@/assets/images/collective/collective-04.jpg"
                alt="paper london"
                class="project__image"
            >
          </figure>
          <figure class="project__image-wrapper">
            <img
                data-aos=""
                src="@/assets/images/collective/collective-03.png"
                alt="paper london"
                class="project__image"
            >
          </figure>
        </div>
      </div>
      <div class="col-10 offset-1 col-xl-10">
        <div class="project__tech-wrapper">
          <p data-aos="slide-up-text" class="d-split section__subtitle">Tech Stack</p>
          <ul data-aos="fade-in" class="project__tech-list">
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">HTHML</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">CSS</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">JavaScript</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-10 offset-1">
        <div class="reveal-text-wrapper">
          <h2 data-scroll data-aos="slide-up-text" class="d-split section__title section__title--low-spacer section__title--light">Next Project</h2>
        </div>
        <router-link :to="{ name: 'paperlondon' }" class="projects__link">
          <figure data-aos="reveal-image-right" class="reveal-image-right reveal-image-right--light plane projects__project-image-wrapper">
            <img data-aos="zoom-image" data-sampler="planeTexture" class="projects__project-image reveal-image" src="@/assets/images/projects/paper.jpg">
          </figure>
          <div class="reveal-text-wrapper projects__project-title-wrapper">
            <h2 data-aos="slide-up-body" class="d-split projects__project-title">
              Thanos Group
            </h2>
          </div>
        </router-link>
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

  beforeCreate: function() {
    document.body.className = 'bg--light';
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
