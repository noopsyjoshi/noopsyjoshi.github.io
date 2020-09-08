<template>
  <section class="project">
    <custom-cursor cursor-color="black" />
    <div class="row">
      <div class="col-10 offset-1">
        <div class="close__wrapper">
          <router-link class="close__link link" :to="{ name: 'home'}">
            <close />
          </router-link>
        </div>
        <div class="project__intro-block">
          <h1 data-aos="slide-up-text" class="h2 d-split project__title">The Collective</h1>
        </div>
        <figure
            data-aos="reveal-image-right"
            class="project__figure reveal-image-right reveal-image-right--light"
        >
          <img
              data-aos="zoom-image"
              class="project__image project__image--showcase reveal-image"
              src="@/assets/images/collective/collective-01.jpg"
          >
        </figure>
      </div>
      <!-- Description -->
      <div class="col-10 offset-1 col-md-7 offset-md-2 col-xl-5">
        <p
            data-aos="slide-up-body"
            class="d-split project__body"
        >
          The project was to collaborate in a team of six developers to build a website for 'The Collective', a group of thoughtful co-living spaces situated around London. The websites embraces colourful components, fun carousels and use of animating svg shapes. The frontend is built using Vue.js, HTML and SCSS and uses Kentico for content management.
        </p>
      </div>
      <!-- Link to website -->
      <div class="col-10 offset-1 col-md-7 offset-md-2">
        <div data-aos="slide-up-body">
          <a target="_blank" href="https://www.thecollective.com/" class="link d-split project__anchor project__anchor--light">See Website</a>
        </div>
      </div>
      <!-- Images -->
      <div class="col-10 offset-1">
        <div class="image-grid">
          <figure data-aos="reveal-image-right" class="image-grid__figure">
            <img
                src="@/assets/images/collective/collective-02.jpg"
                alt="paper london"
                class="image-grid__image reveal-image-right reveal-image-right--light"
            >
          </figure>
          <figure data-aos="reveal-image-right" class="image-grid__figure">
            <img
                src="@/assets/images/collective/collective-03.png"
                alt="paper london"
                class="image-grid__image reveal-image-right reveal-image-right--light"
            >
          </figure>
          <figure data-aos="reveal-image-right" class="image-grid__figure">
            <img
                src="@/assets/images/collective/collective-04.jpg"
                alt="paper london"
                class="image-grid__image reveal-image-right reveal-image-right--light"
            >
          </figure>
          <figure data-aos="reveal-image-right" class="image-grid__figure">
            <img
                src="@/assets/images/collective/collective-05.jpg"
                alt="paper london"
                class="image-grid__image reveal-image-right reveal-image-right--light"
            >
          </figure>
        </div>
      </div>
      <!-- Tech -->
      <div class="col-10 offset-1 col-xl-10">
        <div class="project__tech-wrapper">
          <p data-aos="slide-up-text" class="d-split section__subtitle">Tech Stack</p>
          <ul data-aos="fade-in" class="project__tech-list">
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Vue.js</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">HTML</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">SCSS</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Bootstrap</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Kentico</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Sketch</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Bitbucket</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Jira</p>
            </li>
          </ul>
        </div>
      </div>


      <!-- Next Project -->
      <div class="col-10 offset-1">
        <div class="reveal-text-wrapper">
          <h2 data-scroll data-aos="slide-up-text" class="d-split section__title section__title--low-spacer section__title--light">Next Project</h2>
        </div>
        <router-link :to="{ name: 'thanos' }" class="project__link projects__link">
          <figure data-aos="reveal-image-right" class="reveal-image-right reveal-image-right--light plane projects__project-image-wrapper">
            <img data-aos="zoom-image" data-sampler="planeTexture" class="projects__project-image reveal-image" src="@/assets/images/projects/almyra.jpg">
          </figure>
          <h3 data-aos="slide-up-body" class="project__project-title d-split">Thanos Group</h3>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import '@/assets/scss/atomic/components/_project.scss';
import '@/assets/scss/atomic/components/_image-grid.scss';
import CustomCursor from '@/components/elements/CustomCursor.vue';
import Close from '@/components/elements/Close.vue';

export default {
  components: {
    Close, CustomCursor,
  },

  beforeCreate: function() {
    document.body.className = 'bg--light';
  },
};
</script>
