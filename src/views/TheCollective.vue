<template>
  <section id="project">
    <div class="project">
      <div class="col-10 offset-1">
        <close />
        <project-hero title="The Collective" :image="{
          url: 'collective/collective.jpg',
          description: 'alt'
        }"
        />
      </div>
      <!-- Description -->
      <div class="col-10 offset-1 col-xl-6 offset-xl-2">
        <p class="project__body">
          <span class="project__italic">The Collective</span> is a start-up that own beautiful and thoughtfully designed co-living spaces aimed towards working professionals. The project was to collaborate in a team of six developers to build a website from start to finish. The websites utilises colourful components, fun carousels and use of animating svg shapes. The frontend is built using Nuxt.js, HTML, SCSS and uses Kentico for content management.   Winner of the ‘Best Rebrand of a Digital Property’ category at The <span class="project__highlight">Transform Awards Europe 2020.</span>
        </p>
      </div>
      <!-- Link to website -->
      <div class="col-10 offset-1 col-xl-6 offset-xl-2">
        <a class="project__link" target="_blank" href="https://www.thecollective.com/">&#8627;&nbsp;Go To Website</a>
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
      <div class="col-10 offset-1 col-xl-8 offset-xl-2">
        <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
          <img
              class="project__image project__image--contain"
              src="@/assets/images/collective/collective-02.jpg"
          >
        </figure>
      </div>
      <div class="col-10 offset-1 col-xl-8 offset-xl-2">
        <figure data-aos="fade-in" data-aos-duration="800" class="project__figure">
          <img
              class="project__image project__image--contain"
              src="@/assets/images/collective/collective-03.jpeg"
          >
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
      <footer-item link="#project" />
      <custom-cursor />
    </div>
  </section>
</template>

<script>
import '@/assets/scss/atomic/components/_project.scss';
import '@/assets/scss/atomic/components/_image-grid.scss';
import Close from '@/components/elements/Close.vue';
import VimeoPlayer from '@/components/components/VimeoPlayer.vue';
import ProjectHero from '@/components/components/ProjectHero.vue';
import FooterItem from '@/components/elements/FooterItem.vue';
import CustomCursor from '@/components/elements/CustomCursor.vue';

export default {
  components: {
    Close,
    ProjectHero,
    VimeoPlayer,
    FooterItem,
    CustomCursor,
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
            stack: 'SASS',
          },
          {
            stack: 'CSS Animations',
          },
          {
            stack: 'Bootstrap',
          },
          {
            stack: 'Kentico CMS',
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
            stack: 'Team Bitbucket Version Control',
          },
          {
            stack: 'Sprint planning and updating tickets on Jira',
          },
          {
            stack: 'Cross browser testing on Browserstack',
          },
        ];
      },
    },
  },
};
</script>
