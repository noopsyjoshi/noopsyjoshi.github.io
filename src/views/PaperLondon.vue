<template>
  <section id="project">
    <div class="project">
      <!-- <custom-cursor cursor-color="black" /> -->
      <div class="row">
        <div class="np--sm col-10 offset-1">
          <close />
          <project-hero title="Paper London" :image="{
            url: 'paperlondon/paper-01.jpg',
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
            "PAPER is strong modern femininity captured through bold bright and colourful collections of knitwear, outerwear, dresses and swimswear." - PAPER
          </p>
        </div>
        <div class="col-10 offset-1 col-md-7 offset-md-2 col-xl-5">
          <p
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="1200"
              class="project__body"
          >
            The client wanted to update their site with a redesign and build to closely reflect their brand guidelines, focusing on their bold, colourful and sustainable clothing. Using the Debut theme in Shopify as a base template, I was responsible for creating the site from the Sketch designs, with help from two other developers on the shopping cart, bug fixes and deployment to the live site. The website took three months to complete and the launch was a huge successs for the client resulting in increased sales.
          </p>
        </div>
        <!-- Link to website -->
        <div class="col-10 offset-1 col-md-7 offset-md-2"><website-link link="https://paperlondon.com" /></div>
        <div class="col-12 col-md-8 offset-md-3">
          <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
            <img
                class="project__image project__image--contain"
                src="@/assets/images/paperlondon/paper-hero.png"
            >
            <figcaption>Hero</figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-8 offset-md-3">
          <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
            <img
                class="project__image project__image--contain"
                src="@/assets/images/paperlondon/paper-navigation.png"
            >
            <figcaption>Hero with Navigation</figcaption>
          </figure>
        </div>
      </div>
      <div class="col-12 col-md-7 offset-md-2 col-xl-6">
        <p
            data-aos="fade-in"
            data-aos-duration="800"
            class="project__body"
        >
          Some of the site's features include Instagram API integration, a shopping cart created with AJAX, product search bar and Mailchimp integration for newsletter sign ups. Beautiful and responsive carousels were built to display product images using the plugin Swiper.js.
        </p>
        <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
          <img
              class="project__image project__image--contain"
              src="@/assets/images/paperlondon/paper-instagram.png"
          >
          <figcaption>Instagram Integration</figcaption>
        </figure>
        <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
          <img
              class="project__image project__image--contain"
              src="@/assets/images/paperlondon/paper-recommended.png"
          >
          <figcaption>Recommended Products appear below in the PDP</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-7 offset-md-1">
        <vimeo-player video-id="456941337" />
        <figcaption>PDP</figcaption>
      </div>
      <div class="col-10 offset-1 col-md-5 offset-md-1">
        <p
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="1200"
            class="project__body"
        >
          A vibrant page was designed and added to the site to reflect on the brands goals and process, as well as emit a powerful message on fashions repercussion on the environment. The page features customisable sticky images on the left and content on the right, transforming to accordions on smaller devices.
        </p>
      </div>
      <div class="col-12 col-md-10 offset-md-1">
        <div class="project__figure">
          <vimeo-player video-id="456917037" />
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
          <ul data-aos="fade-in" class="project__tech-list">
            <li v-for="(item, index) in items" :key="index" class="project__tech">
              <p
                  data-aos="fade-in"
              >
                {{ item.stack }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- Next Project -->
      <div class="col-10 offset-1">
        <h2
            data-scroll
            data-aos="slide-up-subheading"
            class="d-split section__title section__title--low-spacer section__title--light"
        >
          Next Project
        </h2>
        <router-link :to="{ name: 'thecollective' }" class="project__link projects__link">
          <figure
              data-aos="reveal-image-up"
              class="reveal-image-up reveal-image-up--light projects__project-image-wrapper"
          >
            <img
                data-aos="zoom-image"
                class="projects__project-image reveal-image"
                src="@/assets/images/projects/thecollective.jpg"
            >
          </figure>
          <h3 data-aos="slide-up-body" class="project__project-title d-split">The Collective</h3>
        </router-link>
      </div>
    </div>
    <footer-item link="#project" />
  </section>
</template>

<script>
import '@/assets/scss/atomic/components/_project.scss';
import '@/assets/scss/atomic/components/_image-grid.scss';
// import CustomCursor from '@/components/elements/CustomCursor.vue';
import Close from '@/components/elements/Close.vue';
import VimeoPlayer from '@/components/components/VimeoPlayer.vue';
import ProjectHero from '@/components/components/ProjectHero.vue';
import WebsiteLink from '@/components/elements/WebsiteLink.vue';
import FooterItem from '@/components/elements/FooterItem.vue';


export default {
  components: {
    Close,
    // CustomCursor,
    ProjectHero,
    VimeoPlayer,
    WebsiteLink,
    FooterItem,
  },

  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            stack: 'JavaScript',
          },
          {
            stack: 'HTML',
          },
          {
            stack: 'CSS, CSS Grid, BEM Format',
          },
          {
            stack: 'Shopify, Liquid',
          },
          {
            stack: 'Jira',
          },
          {
            stack: 'Sketch for the designs',
          },
          {
            stack: 'AJAX',
          },
          {
            stack: 'Swiper.js, Choices.js, Instagram API',
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
