<template>
  <section id="project">
    <div class="project">
      <close />
      <project-hero tags="Retail, E-commerce, Shopify" number="01" title="Paper London" :image="{
        url: 'paperlondon/paper.jpg',
        description: 'Image of swimwear model at Paper London'
      }"
      />
      <project-description link="https://paperlondon.com" tag="Overview" body="Paper is a fashion brand focusing on bold, bright and colourful collections of knitwear, outerwear, dresses and swimswear. The client wanted to update their site to closely reflect their brand guidelines, focusing on their bold, colourful and sustainable clothing. Using the Debut theme in Shopify as a base template, I was responsible for creating the site from the Sketch designs, with help from two other developers on the shopping cart, bug fixes and deployment to the live site. The website took three months to complete and the launch was a huge successs for the client resulting in increased sales. Site's features include Instagram API integration, a shopping cart created with AJAX, product search bar and Mailchimp integration for newsletter sign ups. Responsive carousels were built to display product images using the plugin Swiper.js." />
      <div class="col-10 offset-1 col-xl-8 offset-xl-2">
        <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
          <img class="project__image project__image--contain" src="@/assets/images/paperlondon/paper-navigation.png">
        </figure>
      </div>
      <div class="row">
        <div class="col-10 offset-1 col-xl-3 offset-xl-3">
          <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
            <img class="project__image project__image--contain" src="@/assets/images/paperlondon/paper-collection.png">
          </figure>
        </div>
        <div class="col-10 offset-1 col-xl-3 offset-xl-0">
          <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
            <img class="project__image project__image--contain" src="@/assets/images/paperlondon/paper-checkout.png">
          </figure>
        </div>
      </div>
      <div class="col-10 offset-1 col-xl-8 offset-xl-2">
        <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
          <img class="project__image project__image--contain" src="@/assets/images/paperlondon/paper-instagram.png">
        </figure>
        <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
          <img
              class="project__image project__image--contain"
              src="@/assets/images/paperlondon/paper-recommended.png"
          >
        </figure>
      </div>
      <project-description-image :image="{
        url: 'paperlondon/turtles.jpg',
        description: 'Image of swimwear model at Paper London'
      }" tag="Overview" body=" A vibrant page was designed and added to the site to reflect on the brands goals and process, as well as emit a powerful message on fashion and its repercussions on the environment. The page features customisable sticky images on the left and content on the right, transforming to accordions on smaller devices."
      />
      <div class="col-10 offset-1">
        <div class="project__figure">
          <vimeo-player video-id="456917037" />
        </div>
      </div>
      <div class="row">
        <div class="col-10 offset-1 col-xl-3 offset-xl-3">
          <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
            <img class="project__image project__image--contain" src="@/assets/images/paperlondon/paper-pdp-mob-size.png">
          </figure>
        </div>
        <div class="col-10 offset-1 col-xl-3 offset-xl-0">
          <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
            <img class="project__image project__image--contain" src="@/assets/images/paperlondon/paper-pdp-mob.png">
          </figure>
        </div>
      </div>
      <div class="row">
        <div class="col-3 offset-2">
          <h4 class="about__subtitle">Technical Skills</h4>
        </div>
        <div class="col-6 offset-1">
          <div class="about__skills-list">
            <ul>
              <li v-for="(item, index) in items" :key="index">
                <p data-aos="reveal">
                  {{ item.stack }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer-item link="#project" />
    <custom-cursor />
  </section>
</template>

<script>
import '@/assets/scss/atomic/components/_project.scss';
import '@/assets/scss/atomic/components/_image-grid.scss';
import '@/assets/scss/atomic/components/_about.scss';
import CustomCursor from '@/components/elements/CustomCursor.vue';
import Close from '@/components/elements/Close.vue';
import VimeoPlayer from '@/components/components/VimeoPlayer.vue';
import ProjectHero from '@/components/components/ProjectHero.vue';
import ProjectDescription from '@/components/components/ProjectDescription.vue';
import ProjectDescriptionImage from '@/components/components/ProjectDescriptionImage.vue';
import FooterItem from '@/components/elements/FooterItem.vue';


export default {
  components: {
    Close,
    CustomCursor,
    ProjectHero,
    ProjectDescription,
    ProjectDescriptionImage,
    VimeoPlayer,
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
            stack: 'JQuery',
          },
          {
            stack: 'HTML',
          },
          {
            stack: 'AJAX',
          },
          {
            stack: 'SASS, CSS Grid, BEM Format',
          },
          {
            stack: 'Shopify',
          },
          {
            stack: 'Liquid',
          },
          {
            stack: 'Jira',
          },
          {
            stack: 'Sketch',
          },
          {
            stack: 'Swiper.js, Choices.js, Instagram API',
          },
        ];
      },
    },
  },

  beforeCreate() {
  },
};
</script>
