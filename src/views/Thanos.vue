<template>
  <section id="project">
    <div class="project">
      <div class="col-10 offset-1">
        <close />
        <project-hero title="Thanos Group" :image="{
          url: 'thanos/thanos-01.jpg',
          description: 'alt'
        }"
        />
      </div>
      <div class="col-10 offset-1 col-xl-6 offset-xl-2">
        <p class="project__body">
          Thanos is a group consisting of three luxury hotel retreats located in Cyprus. The hotels, Anassa, Annabelle and Almyra adhere to a brand guideline, embodying elegance, serenity and the Meditarrean charm, but also maintain a unique feel that makes each hotel distinctive. I helped deliver the frontend for the three brochure sites and their respective booking systems, while liasing with a back-end partner company to integrate the site as seamlessly as possible by providing extensive integration support.
        </p>
      </div>
      <div class="col-10 offset-1 col-xl-6 offset-xl-2">
        <a class="project__link project__link--block" target="_blank" href="https://anassa.com">&#8627;&nbsp;Go To Anassa</a>
        <a class="project__link project__link--block" target="_blank" href="https://almyra.com">&#8627;&nbsp;Go To Almyra</a>
        <a class="project__link project__link--block" target="_blank" href="https://annabelle.com.cy">&#8627;&nbsp;Go To Annabelle</a>
      </div>
      <div class="col-10 offset-1">
        <div class="project__video">
          <vimeo-player video-id="456946027" />
        </div>
      </div>
      <div class="col-10 offset-1">
        <div class="project__video">
          <vimeo-player video-id="456946356" />
        </div>
      </div>
      <div class="col-10 offset-1">
        <div class="project__video">
          <vimeo-player video-id="456946903" />
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
            stack: 'JavaScript',
          },
          {
            stack: 'HTML',
          },
          {
            stack: 'SASS',
          },
          {
            stack: 'Bootstrap',
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
            stack: 'Swiper Plugin',
          },
          {
            stack: 'Google Maps Integration',
          },
        ];
      },
    },
  },
};
</script>
