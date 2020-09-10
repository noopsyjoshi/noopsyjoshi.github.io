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
          <h1 data-aos="slide-up-heading" class="h2 d-split project__title">Thanos Group</h1>
        </div>
        <figure
            data-aos="reveal-image-right"
            class="project__figure reveal-image-right reveal-image-right--light"
        >
          <img
              data-aos="zoom-image"
              class="project__image project__image--showcase reveal-image"
              src="@/assets/images/thanos/thanos-01.jpg"
          >
        </figure>
      </div>
      <!-- Description -->
      <div class="col-10 offset-1 col-md-7 offset-md-2 col-xl-5">
        <p
            data-aos="slide-up-body"
            class="d-split project__body"
        >
          Thanos is a group consisting of three luxury hotel retreats located in Cyprus. The hotels, Anassa, Annabelle and Almyra adhere to a brand guideline, embodying elegance, serenity and the Meditarrean charm, but also maintain a unique feel that makes each hotel distinctive. I helped deliver the frontend for the three brochure sites and their respective booking systems, while liasing with a back-end partner company to integrate the site as seamlessly as possible by providing extensive integration support.
        </p>
      </div>
      <!-- Link to website -->
      <div class="col-10 offset-1 col-md-7 offset-md-2">
        <div class="project__website-link" data-aos="slide-up-body">
          <a target="_blank" href="https://www.anassa.com/" class="link d-split project__anchor project__anchor--light">Anassa</a>
        </div>
        <div class="project__website-link" data-aos="slide-up-body">
          <a target="_blank" href="https://www.annabelle.com.cy/" class="link d-split project__anchor project__anchor--light">Annabelle</a>
        </div>
        <div class="project__website-link" data-aos="slide-up-body">
          <a target="_blank" href="https://www.almyra.com/" class="link d-split project__anchor project__anchor--light">Almyra</a>
        </div>
      </div>
      <!-- Images -->
      <div class="col-10 offset-1">
        <div class="image-grid">
          <figure data-aos="reveal-image-right" class="image-grid__figure">
            <img
                src="@/assets/images/thanos/thanos-02.jpg"
                alt="paper london"
                class="image-grid__image reveal-image-right reveal-image-right--light"
            >
          </figure>
          <figure data-aos="reveal-image-right" class="image-grid__figure">
            <img
                src="@/assets/images/thanos/thanos-03.jpg"
                alt="paper london"
                class="image-grid__image reveal-image-right reveal-image-right--light"
            >
          </figure>
          <figure data-aos="reveal-image-right" class="image-grid__figure">
            <img
                src="@/assets/images/thanos/thanos-04.jpg"
                alt="paper london"
                class="image-grid__image reveal-image-right reveal-image-right--light"
            >
          </figure>
          <figure data-aos="reveal-image-right" class="image-grid__figure">
            <img
                src="@/assets/images/thanos/thanos-05.jpg"
                alt="paper london"
                class="image-grid__image reveal-image-right reveal-image-right--light"
            >
          </figure>
        </div>
      </div>
      <div class="col-10 offset-1 col-md-7 offset-md-2 col-xl-5">
        <p
            data-aos="slide-up-body"
            class="d-split project__body"
        >
          I worked individually and part of a development team ranging between two and six developers at a time. The site was broken down into pages and modules which were assigned and discussed by each member of the team during the sprint kick off and daily stands up. We used the popular SCSS BEM format to keep the styles organised and consistent across all the projects. Retrospectives were held in a classic agency fashion using colourful sticky notes at the end of every site build, to discuss how to further improve the process. In addition to working on my technical skills, I got to understand the top view process of the project by engaging closely to QA, Project Managers, UX and UI designers, often sitting together and sharing ideas.
        </p>
      </div>
      <!-- Tech -->
      <div class="col-10 offset-1 col-xl-10">
        <div class="project__tech-wrapper">
          <p data-aos="slide-up-subheading" class="d-split section__subtitle">Tech Stack</p>
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
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Kentico</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Jira</p>
            </li>
            <li class="project__tech">
              <p class="d-split" data-aos-delay="750" data-aos-duration="1200" data-aos="fade-in">Invision</p>
            </li>
          </ul>
        </div>
      </div>   
      <!-- Next Project -->
      <div class="col-10 offset-1">
        <h2 data-scroll data-aos="slide-up-subheading" class="d-split section__title section__title--low-spacer section__title--light">Next Project</h2>
        <router-link :to="{ name: 'generalassembly' }" class="project__link projects__link">
          <figure data-aos="reveal-image-right" class="reveal-image-right reveal-image-right--light plane projects__project-image-wrapper">
            <img data-aos="zoom-image" data-sampler="planeTexture" class="projects__project-image reveal-image" src="@/assets/images/projects/generalassembly.jpg">
          </figure>
          <h3 data-aos="slide-up-body" class="project__project-title d-split">General Assembly Work</h3>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import '@/assets/scss/atomic/components/_project.scss';
import '@/assets/scss/atomic/components/_image-grid.scss';
import CustomCursor from '@/components/elements/CustomCursor.vue';
import Close from '@/components/elements/Close.vue';

export default {
  components: {
    Close, CustomCursor,
  },

  beforeCreate: function() {
    document.body.className = 'bg--light';
  },
};
</script>
