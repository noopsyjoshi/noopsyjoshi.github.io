<template>
  <section class="project">
    <custom-cursor />
    <div class="col-10 offset-1">
      <close />
      <div class="project__intro-block">
        <h1 data-aos="slide-up-heading" class="h2 d-split project-hero__title">General Assembly</h1>
      </div>
    </div>
    <!-- Description -->
    <div class="col-10 offset-1 col-xl-6 offset-xl-2">
      <p class="project__body">
        I enrolled in General Assembly’s Web Development Immersive course during the summer of 2018 to specialise in Web Development and accelerate my coding skills. It was a pivotal point in my journey as it taught me that perseverance, curiosity and a logical approach to problem solving is key to becoming a Web Developer. I gained invaluable insight into full stack technologies and frameworks such as Javascript, React.js and Node.js, Git and Github version control, SCSS and CSS frameworks Bootstrap and Bulma.<br><br> Over the 3 months period, I worked on 4 projects that grew in complexity and focused on different technologies. For the first one I recreated the classic Space Invaders game with a Star Wars spin, using HTML, CSS and Javascript. Designed as a one player game, you can move the spaceship left and right and shoot at the incoming enemies by pressing the spacebar. There is an boss level at the end. (Note: You may experience custom made laser sounds as game audio is on by default).
      </p>
    </div>
    <!-- Images -->
    <div class="col-10 offset-1">
      <div class="image-grid image-grid--small">
        <figure data-aos="reveal-image-up" class="image-grid__figure">
          <img
              src="@/assets/images/assembly/assembly-02.png"
              alt="paper london"
              class="image-grid__image image-grid__image--contain reveal-image-up reveal-image-up--light"
          >
        </figure>
        <figure data-aos="reveal-image-up" class="image-grid__figure">
          <img
              src="@/assets/images/assembly/assembly-03.png"
              alt="paper london"
              class="image-grid__image image-grid__image--contain reveal-image-up reveal-image-up--light"
          >
        </figure>
      </div>
    </div>
    <div class="col-10 offset-1 col-xl-6 offset-xl-2">
      <a class="project__link project__link--block" target="_blank" href="https://noopurjoshi.com/wdi-project-one/">&#8627;&nbsp; Play Space Invaders</a>
      <a class="project__link project__link--block" target="_blank" href="https://github.com/noopsyjoshi/wdi-project-one">&#8627;&nbsp; See GitHub</a>
    </div>
    <div class="col-10 offset-1 col-md-7 offset-md-2 col-xl-5">
      <p
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="1200"
          class="project__body"
      />
    </div>
    <div class="row">
      <div class="col-10 offset-1 col-xl-4 offset-xl-2"><h4>Technical and Soft Skills</h4></div>
      <div class="col-10 offset-1 col-xl-6">
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
            stack: 'SCSS',
          },
          {
            stack: 'React.js',
          },
          {
            stack: 'Angular.js',
          },
          {
            stack: 'Node.js',
          },
          {
            stack: 'MongoDB',
          },
          {
            stack: 'Heroku',
          },
          {
            stack: 'Presentation of projects',
          },
          {
            stack: 'Github Version Control within a group project',
          },
        ];
      },
    },
  },
};
</script>
