<template>
  <section id="project">
    <div class="project">
      <div class="row">
        <div class="np--sm col-10 offset-1">
          <close />
          <project-hero title="Paper London" :image="{
            url: 'paperlondon/paper.jpg',
            description: 'alt'
          }"
          />
        </div>
        <div class="col-10 offset-1 col-xl-6 offset-xl-2">
          <p class="project__body">
            Paper is a fashion brand focusing on bold, bright and colourful collections of knitwear, outerwear, dresses and swimswear. The client wanted to update their site to closely reflect their brand guidelines, focusing on their bold, colourful and sustainable clothing. Using the Debut theme in Shopify as a base template, I was responsible for creating the site from the Sketch designs, with help from two other developers on the shopping cart, bug fixes and deployment to the live site. The website took three months to complete and the launch was a huge successs for the client resulting in increased sales.<br><br>Site's features include Instagram API integration, a shopping cart created with AJAX, product search bar and Mailchimp integration for newsletter sign ups. Responsive carousels were built to display product images using the plugin Swiper.js.
          </p>
        </div>
        <!-- Link to website -->
        <div class="col-10 offset-1 col-xl-6 offset-xl-2">
          <a class="link project__link" target="_blank" href="https://paperlondon.com">&#8627;&nbsp;Go To Website</a>
        </div>
        <div class="col-10 offset-1 col-xl-8 offset-xl-2">
          <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
            <img class="project__image project__image--contain" src="@/assets/images/paperlondon/paper-navigation.png">
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
      <!-- <div class="col-12 col-md-7 offset-md-1">
        <vimeo-player video-id="456941337" />
        <figcaption>PDP</figcaption>
      </div> -->
      <div class="col-10 offset-1 col-xl-6 offset-xl-3">
        <p class="project__body">
          A vibrant page was designed and added to the site to reflect on the brands goals and process, as well as emit a powerful message on fashion and its repercussions on the environment. The page features customisable sticky images on the left and content on the right, transforming to accordions on smaller devices.
        </p>
      </div>
      <div class="col-12 col-md-10 offset-md-1">
        <div class="project__figure">
          <vimeo-player video-id="456917037" />
        </div>
      </div>
      <div class="row">
        <div class="col-4 offset-2"><h4>&mdash; Technical and Soft Skills</h4></div>
        <div class="col-xl-6">
          <div class="about__skills">
            <ul>
              <li v-for="(item, index) in items" :key="index" class="project__tech">
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
import CustomCursor from '@/components/elements/CustomCursor.vue';
import Close from '@/components/elements/Close.vue';
import VimeoPlayer from '@/components/components/VimeoPlayer.vue';
import ProjectHero from '@/components/components/ProjectHero.vue';
import FooterItem from '@/components/elements/FooterItem.vue';


export default {
  components: {
    Close,
    CustomCursor,
    ProjectHero,
    VimeoPlayer,
    FooterItem,
  },

  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            stack: 'Javascript',
          },
          {
            stack: 'JQuery',
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

  beforeCreate() {
  },
};
</script>
