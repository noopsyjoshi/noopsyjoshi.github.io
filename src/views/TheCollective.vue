<template>
  <section class="project">
    <custom-cursor cursor-color="black" />
    <div class="row">
      <div class="col-10 offset-1">
        <close />
        <project-hero title="The Collective" :image="{
          url: 'collective/collective-01.jpg',
          description: 'alt'
        }"
        />
      </div>
      <!-- Description -->
      <div class="col-10 offset-1 col-md-8 offset-md-2">
        <p
            data-aos="slide-up-body"
            class="d-split project__intro"
        >
          Winner of the ‘Best Rebrand of a Digital Property’ category at The Transform Awards Europe 2020
        </p>
      </div>
      <div class="col-10 offset-1 col-md-7 offset-md-2 col-xl-5">
        <p
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="1200"
            class="project__body"
        >
          The project was to collaborate in a team of six developers to build a website for 'The Collective', a group of thoughtful co-living spaces situated around London. The websites utilises colourful components, fun carousels and use of animating svg shapes. The frontend is built using Nuxt.js, HTML, SCSS and uses Kentico for content management.
        </p>
      </div>
      <!-- Link to website -->
      <div class="col-10 offset-1 col-md-7 offset-md-2"><website-link link="https://www.thecollective.com/" /></div>
    </div>
    <div class="col-12 col-md-10 offset-md-1">
      <div class="project__video">
        <vimeo-player data-aos="fade-in" data-aos-duration="800" video-id="456945372" />
      </div>
    </div>
    <div class="row">
      <div class="col-8 offset-1 col-md-3">
        <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
          <img
              class="project__image project__image--contain"
              src="@/assets/images/collective/collective-day.png"
          >
        </figure>
      </div>
      <div class="col-8 offset-1 col-md-3 offset-md-0">
        <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
          <img
              class="project__image project__image--contain"
              src="@/assets/images/collective/collective-day-02.png"
          >
        </figure>
      </div>
    </div>
    <div class="col-12 col-md-8 offset-md-3">
      <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
        <img
            class="project__image project__image--contain"
            src="@/assets/images/collective/collective-02.jpg"
        >
      </figure>
    </div>
    <div class="col-12 col-md-8 offset-md-3">
      <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
        <img
            class="project__image project__image--contain"
            src="@/assets/images/collective/collective-03.jpeg"
        >
        <figcaption>Designs</figcaption>
      </figure>
    </div>
    <div class="row">
      <div class="col-8 offset-1 col-md-3">
        <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
          <img
              class="project__image project__image--contain"
              src="@/assets/images/collective/collective-restaurant.png"
          >
        </figure>
      </div>
    </div>
    <div class="col-8 offset-1 col-md-3 offset-md-0">
      <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
        <img
            class="project__image project__image--contain"
            src="@/assets/images/collective/collective-nav.png"
        >
      </figure>
    </div>
    <div class="col-8 offset-1 col-md-3 offset-md-0">
      <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
        <img
            class="project__image project__image--contain"
            src="@/assets/images/collective/collective-room-enquire.png"
        >
      </figure>
    </div>
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1">
        <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
          <img
              class="project__image project__image--contain"
              src="@/assets/images/collective/collective-room-desktop.png"
          >
        </figure>
      </div>
    </div>
   
    <!-- Tech -->
    <div class="col-10 offset-1">
      <div class="project__tech-wrapper">
        <h2
            data-aos="slide-up-subheading"
            class="d-split section__title section__title--low-spacer"
        >
          Tech Stack
        </h2>
        <ul data-aos="fade-in" :data-aos-delay="index * 1000" class="project__tech-list">
          <li v-for="(item, index) in items" :key="index" class="project__tech">
            <p>{{ item.stack }}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- Next Project -->
    <!-- <div class="col-10 offset-1">
      <h2
          data-scroll
          data-aos="slide-up-subheading"
          class="d-split section__title section__title--low-spacer section__title--light"
      >
        Next Project
      </h2>
      <router-link :to="{ name: 'thecollective' }" class="project__link projects__link">
        <figure
            data-aos="reveal-image-right"
            class="reveal-image-right reveal-image-right--light projects__project-image-wrapper"
        >
          <img
              data-aos="zoom-image"
              class="projects__project-image reveal-image"
              src="@/assets/images/projects/thecollective.jpg"
          >
        </figure>
        <h3 data-aos="slide-up-body" class="project__project-title d-split">The Collective</h3>
      </router-link>
    </div> -->
  </section>
</template>

<script>
import '@/assets/scss/atomic/components/_project.scss';
import '@/assets/scss/atomic/components/_image-grid.scss';
import CustomCursor from '@/components/elements/CustomCursor.vue';
import Close from '@/components/elements/Close.vue';
import VimeoPlayer from '@/components/components/VimeoPlayer.vue';
import ProjectHero from '@/components/components/ProjectHero.vue';
import WebsiteLink from '@/components/elements/WebsiteLink.vue';

export default {
  components: {
    Close,
    CustomCursor,
    ProjectHero,
    VimeoPlayer,
    WebsiteLink,
  },

  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            stack: 'Nuxt.js',
          },
          {
            stack: 'Javascript',
          },
          {
            stack: 'HTML',
          },
          {
            stack: 'SCSS',
          },
          {
            stack: 'Kentico',
          },
          {
            stack: 'Sketch',
          },
          {
            stack: 'JSON',
          },
          {
            stack: 'Google Maps',
          },
          {
            stack: 'Mailchimp',
          },
          {
            stack: 'Kentico Content Management',
          },
        ];
      },
    },
  },

  beforeCreate: function() {
    document.body.className = 'bg--light';
  },
};
</script>
