<template>
  <section :key="componentKey" class="project">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="close__wrapper">
          <router-link class="close__link link" :to="{ name: 'home'}">
            <close />
          </router-link>
        </div>
        <div class="project__intro-block">
          <h1 data-aos="slide-up-text" class="d-split project__title">The Collective</h1>
        </div>
        <figure
            data-aos="reveal-image-right"
            class="project__figure reveal-image-right reveal-image-right--light"
        >
          <img
              data-aos="zoom-image"
              class="project__image project__image--showcase reveal-image"
              data-sampler="planeTexture"
              src="@/assets/images/collective/collective-01.jpg"
          >
        </figure>
      </div>
      <div class="col-10 offset-1 col-xl-7 offset-2">
        <p
            data-aos="fade-in"
            data-aos-easing="smooth"
            data-aos-duration="1000"
            class="project__body"
        >
          Thanos is a group consisting of three luxury hotel retreats located in Cyprus. The hotels, Anassa, Annabelle and Almyra adhere to a brand guideline, embodying elegance, serenity and the Meditarrean charm, but also maintain a unique feel that makes each hotel distinctive. I helped deliver the frontend for the three brochure sites and their respective booking systems, while liasing with a back-end partner company to integrate the site as seamlessly as possible by providing extensive integration support.
        </p>
      </div>
      <div class="col-10 offset-1">
        <div class="project__image-grid">
          <figure class="project__image-wrapper">
            <img
                data-aos="zoom-image"
                src="@/assets/images/collective/collective-02.jpg"
                alt="paper london"
                class="project__image"
            >
          </figure>
          <figure class="project__image-wrapper">
            <img
                data-aos="zoom-image"
                src="@/assets/images/collective/collective-05.jpg"
                alt="paper london"
                class="project__image"
            >
          </figure>
          <figure class="project__image-wrapper">
            <img
                data-aos="zoom-image"
                src="@/assets/images/collective/collective-04.jpg"
                alt="paper london"
                class="project__image"
            >
          </figure>
          <figure class="project__image-wrapper">
            <img
                data-aos="zoom-image"
                src="@/assets/images/collective/collective-03.png"
                alt="paper london"
                class="project__image"
            >
          </figure>
        </div>
      </div>
      <div class="col-10 offset-1 col-xl-7">
        <p
            data-aos="fade-in"
            class="project__body project__body"
        >
          I worked individually and part of a development team ranging between two and six developers at a time. The site was broken down into pages and modules which were assigned and discussed by each member of the team during the sprint kick off and daily stands up. We used the popular SCSS BEM format to keep the styles organised and consistent across all the projects. Retrospectives were held in a classic agency fashion using colourful sticky notes at the end of every site build, to discuss how to further improve the process. In addition to working on my technical skills, I got to understand the top view process of the project by engaging closely to QA, Project Managers, UX and UI designers, often sitting together and sharing ideas.
        </p>
      </div>
      <div class="col-10 offset-1 col-xl-7">
        <p
            data-aos="fade-in"
            class="project__body"
        />
      </div>
      <div class="col-10 offset-1 col-xl-10">
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
            <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Handlebars.js</p>
          </li>
          <li class="project__tech">
            <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Bootstrap</p>
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
      <div class="col-10 offset-1">
        <router-link :to="{ name: 'spaceinvaders' }" class="projects__link">
          <figure data-aos="reveal-image-right" class="reveal-image-right reveal-image-right--light plane projects__project-image-wrapper">
            <img data-aos="zoom-image" data-sampler="planeTexture" class="projects__project-image reveal-image" src="@/assets/images/projects/spaceinvaders.png">
          </figure>
          <div class="reveal-text-wrapper projects__project-title-wrapper">
            <h2 data-aos="slide-up-body" class="d-split projects__project-title">
              Next Project: Space Invaders
            </h2>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.min.css';
import '@/assets/scss/atomic/components/_project.scss';
import Close from '@/components/elements/Close.vue';

export default {
  components: {
    Close,
  },

  data() {
    return {
      componentKey: 0,
    };
  },

  beforeCreate: function() {
    document.body.className = 'bg--light';
  },

  mounted() {
    // this.scroll = new LocomotiveScroll({
    //   el: document.querySelector('[data-scroll-container]'),
    //   smooth: true,
    //   class: 'is-inview',
    // });
    // this.scroll.init();
  },

  destroyed() {
    // this.scroll.destroy();
  },

  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
  },
};
</script>
