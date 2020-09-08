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
          <h1 data-aos="slide-up-text" class="h2 d-split project__title">{{ title }}</h1>
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
      <!-- Description -->
      <div class="col-10 offset-1 col-md-7 offset-md-2">
        <p
            data-aos="slide-up-body"
            class="d-split project__body"
        >
          {{ body }}
        </p>
      </div>
      <!-- Link to website -->
      <div class="col-10 offset-1 col-md-7 offset-md-2">
        <div data-aos="fade-in"
            data-aos-easing="smooth"
            data-aos-duration="1000"
        >
          <a :href="websiteLink" class="link d-split project__anchor project__anchor--light">See Website</a>
        </div>
      </div>
      <!-- Images -->
      <div class="col-10 offset-1">
        <image-grid />
      </div>
      <!-- Tech -->
      <!-- <div class="col-10 offset-1 col-xl-10">
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
      </div>    -->
      <!-- Next Project -->
      <!-- <div class="col-10 offset-1">
        <div class="reveal-text-wrapper">
          <h2 data-scroll data-aos="slide-up-text" class="d-split section__title section__title--low-spacer section__title--light">Next Project</h2>
        </div>
        <router-link :to="{ name: 'thecollective' }" class="projects__link">
          <figure data-aos="reveal-image-right" class="reveal-image-right reveal-image-right--light plane projects__project-image-wrapper">
            <img data-aos="zoom-image" data-sampler="planeTexture" class="projects__project-image reveal-image" src="@/assets/images/projects/thecollective.jpg">
          </figure>
          <div class="reveal-text-wrapper projects__project-title-wrapper">
            <h2 data-aos="slide-up-body" class="d-split">
              The Collective
            </h2>
          </div>
        </router-link>
      </div> -->
    </div>
  </section>
</template>

<script>
import '@/assets/scss/atomic/components/_project.scss';
import Close from '@/components/elements/Close.vue';
import CustomCursor from '@/components/elements/CustomCursor.vue';
import ImageGrid from '@/components/elements/ImageGrid.vue';

export default {
  components: {
    ImageGrid, CustomCursor, Close,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    featuredImage: {
      type: Object,
      default() {
        return {
          url: { type: String },
          description: { type: String },
        };
      },
    },
    body: {
      type: String,
      required: true,
    },
    websiteLink: {
      type: String,
      required: true,
    },
  },

  beforeCreate: function() {
    document.body.className = 'bg--light';
  },
};
</script>
