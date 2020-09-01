<template>
  <section :key="componentKey" class="project">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="close__wrapper">
          <router-link class="close__link link" :to="{ name: 'home'}">
            <close data-aos="fade-in" data-aos-delay="1000" />
          </router-link>
        </div>
        <div class="project__intro-block">
          <h1 data-aos="slide-up-text" class="d-split project__title">Paper London</h1>
        </div>
        <figure
            data-aos="reveal-image-right"
            class="project__figure reveal-image-right reveal-image-right--light"
        >
          <img
              data-aos="zoom-image"
              class="project__image project__image--showcase reveal-image"
              data-sampler="planeTexture"
              src="@/assets/images/paperlondon/paper-01.jpg"
          >
        </figure>
      </div>
      <div class="col-10 offset-1 col-xl-7 offset-2">
        <p
            data-aos="fade-in"
            data-aos-easing="smooth"
            data-aos-duration="1000"
            class="project__body"
        >
          Paper is a luxury women's retail brand with focus on bold, colourful and sustainable clothing. The client wanted to update their site to closely reflect their brand. Using the Debut theme in Shopify as a generic template, I was responsible for creating the site, with help from two other developers on the shopping cart, bug fixes and deployment to the live site. The website took three months to complete, the launch was a huge successs for the client resulting in increased number of sales.
        </p>
      </div>
      <div class="col-10 offset-1">
        <div class="project__image-grid">
          <figure class="project__image-wrapper">
            <img
                data-aos="zoom-image"
                src="@/assets/images/paperlondon/paper-02.jpg"
                alt="paper london"
                class="project__image"
            >
          </figure>
          <figure class="project__image-wrapper">
            <img
                data-aos="zoom-image"
                src="@/assets/images/paperlondon/paper-03.jpg"
                alt="paper london"
                class="project__image"
            >
          </figure>
          <figure class="project__image-wrapper">
            <img
                data-aos="zoom-image"
                src="@/assets/images/paperlondon/paper-04.jpg"
                alt="paper london"
                class="project__image"
            >
          </figure>
          <figure class="project__image-wrapper">
            <img
                data-aos="zoom-image"
                src="@/assets/images/paperlondon/paper-05.jpg"
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
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">JavaScript</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">HTML</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">SCSS</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Shopify</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Liquid</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">AJAX</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Sketch</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Jira</p>
            </li>
          </ul>
        </div>   
      </div>   
      <div class="col-10 offset-1">
        <div class="reveal-text-wrapper">
          <h2 data-scroll data-aos="slide-up-text" class="d-split section__title section__title--light">Next Project</h2>
        </div>
        <router-link :to="{ name: 'thecollective' }" class="projects__link">
          <figure data-aos="reveal-image-right" class="reveal-image-right reveal-image-right--light plane projects__project-image-wrapper">
            <img data-aos="zoom-image" data-sampler="planeTexture" class="projects__project-image reveal-image" src="@/assets/images/projects/thecollective.jpg">
          </figure>
          <div class="reveal-text-wrapper projects__project-title-wrapper">
            <h2 data-aos="slide-up-body" class="d-split projects__project-title">
              The Collective
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
