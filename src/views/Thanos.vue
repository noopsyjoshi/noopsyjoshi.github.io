<template>
  <section class="project">
    <custom-cursor cursor-color="black" />
    <div class="row">
      <div class="col-10 offset-1">
        <close />
        <project-hero title="Thanos Group" :image="{
          url: 'thanos/thanos-01.jpg',
          description: 'alt'
        }"
        />
      </div>
      <!-- Description -->
      <div class="col-10 offset-1 col-md-8 offset-md-2">
        <p
            data-aos="slide-up-body"
            class="d-split project__intro"
        />
      </div>
      <div class="col-10 offset-1 col-md-7 offset-md-2 col-xl-5">
        <p
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="1200"
            class="project__body"
        >
          Thanos is a group consisting of three luxury hotel retreats located in Cyprus. The hotels, Anassa, Annabelle and Almyra adhere to a brand guideline, embodying elegance, serenity and the Meditarrean charm, but also maintain a unique feel that makes each hotel distinctive.<br><br>I helped deliver the frontend for the three brochure sites and their respective booking systems, while liasing with a back-end partner company to integrate the site as seamlessly as possible by providing extensive integration support.
        </p>
      </div>
      <!-- Link to website -->
      <div class="col-10 offset-1 col-md-7 offset-md-2">
        <website-link link="https://paperlondon.com" />
      </div>
      <div class="col-12 col-md-10 offset-md-1">
        <div class="project__video">
          <vimeo-player video-id="456946027" />
        </div>
      </div>
      <div class="col-7 offset-1">
        <div class="project__video">
          <vimeo-player video-id="456946356" />
        </div>
      </div>
      <div class="col-7 offset-1">
        <div class="project__video">
          <vimeo-player video-id="456946903" />
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
    </div>
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
            stack: 'JavaScript',
          },
          {
            stack: 'HTML',
          },
          {
            stack: 'CSS, Bootstrap, BEM Format',
          },
          {
            stack: 'Handlebars.js',
          },
          {
            stack: 'Jira',
          },
          {
            stack: 'Sketch',
          },
          {
            stack: 'AJAX',
          },
          {
            stack: 'Swiper.js, Choices.js, Google Maps API',
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
