<template>
  <section class="project">
    <custom-cursor cursor-color="black" />
    <div class="row">
      <div class="col-10 offset-1">
        <div class="close__wrapper">
          <router-link class="close__link link" :to="{ name: 'home'}">
            <close data-aos="fade-in" data-aos-delay="1000" />
          </router-link>
        </div>
        <div class="project__intro-block">
          <h1 data-aos="slide-up-text" class="h2 d-split project__title">Paper London</h1>
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
            data-aos="fade-in"
            data-aos-easing="smooth"
            data-aos-duration="1000"
            class="project__body"
        >
          Paper is a luxury women's retail brand with focus on bold, colourful and sustainable clothing. The client wanted to update their site with a redesign and build to closely reflect their brand guidelines. Using the Debut theme in Shopify as a base template, I was responsible for creating the site, with help from two other developers on the shopping cart, bug fixes and deployment to the live site. The website took three months to complete and the launch was a huge successs for the client that resulted in increased sales.
        </p>
      </div>
      <!-- Link to website -->
      <div class="col-10 offset-1 col-md-7 offset-md-2">
        <div data-aos="fade-in"
            data-aos-easing="smooth"
            data-aos-duration="1000"
        >
          <a href="#" class="link d-split project__anchor project__anchor--light">See Website</a>
        </div>
      </div>
      <!-- Images -->
      <div class="col-10 offset-1">
        <div class="project__image-grid">
          <figure data-aos="reveal-image-right" class="project__image-wrapper">
            <img
                src="@/assets/images/paperlondon/paper-02.jpg"
                alt="paper london"
                class="project__image reveal-image-right reveal-image-right--light"
            >
          </figure>
          <figure data-aos="reveal-image-right" class="project__image-wrapper">
            <img
                src="@/assets/images/paperlondon/paper-03.jpg"
                alt="paper london"
                class="project__image reveal-image-right reveal-image-right--light"
            >
          </figure>
          <figure data-aos="reveal-image-right" class="project__image-wrapper">
            <img
                src="@/assets/images/paperlondon/paper-04.jpg"
                alt="paper london"
                class="project__image reveal-image-right reveal-image-right--light"
            >
          </figure>
          <figure data-aos="reveal-image-right" class="project__image-wrapper">
            <img
                src="@/assets/images/paperlondon/paper-05.jpg"
                alt="paper london"
                class="project__image reveal-image-right reveal-image-right--light"
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
      <!-- Next Project -->
      <div class="col-10 offset-1">
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
      </div>
    </div>
  </section>
</template>

<script>
import '@/assets/scss/atomic/components/_project.scss';
import Close from '@/components/elements/Close.vue';
import CustomCursor from '@/components/elements/CustomCursor.vue';

export default {
  components: {
    CustomCursor, Close,
  },

  data() {
    return {
      componentKey: 0,
      viewKey: 0,
    };
  },

  beforeCreate: function() {
    document.body.className = 'bg--light';
  },
};
</script>
