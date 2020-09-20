<template>
  <section id="about" data-color="bg--blue-dark" class="about">
    <div class="row">
      <div class="col-10 offset-1">
        <h2 data-aos="slide-up-subheading" class="d-split section__title">About</h2>
      </div>
      <div class="col-10 offset-1 col-md-8 offset-xl-2">
        <div class="about__body">
          <p
              class="d-split"
              data-aos="slide-up-body"
          >
            Hi! I'm Noopur Joshi, a <span class="c--blue">front-end developer</span> living in <span class="c--blue">London</span>, fuelled by creative designs, clean code, chai, glitter & <span class="c--blue">pixel perfection</span>. Over the last couple of years, I’ve had the privilege to collaborate with some of the most talented people in the industry on a range of projects including <span class="c--blue">e-commerce and hospitality.</span> I pride myself with going above and beyond to bring creative designs to life with great design and technical accuracy.
          </p>
        </div>
      </div>
      <div class="col-10 offset-1 col-md-8 offset-xl-2">
        <div class="about__skills">
          <ul>
            <li>
              <p data-aos="reveal">JS ES6, CSS3, HTML5</p>
            </li>
            <li>
              <p data-aos="reveal">SASS</p>
            </li>
            <li>
              <p data-aos="reveal">CSS Animations</p>
            </li>
            <li>
              <p data-aos="reveal">Bootstrap</p>
            </li>
            <li>
              <p data-aos="reveal">Shopify / Liquid</p>
            </li>
            <li>
              <p data-aos="reveal">Sketch</p>
            </li>
            <li>
              <p data-aos="reveal">Proficient with Vue.js and Handlebars.js</p>
            </li>
            <li>
              <p data-aos="reveal">Understanding of React.js</p>
            </li>
            <li>
              <p data-aos="reveal">Cross browser compatibility</p>
            </li>
            <li>
              <p data-aos="reveal">Mobile first and responsive design</p>
            </li>
            <li>
              <p data-aos="reveal">Understanding of API integration</p>
            </li>
            <li>
              <p data-aos="reveal">Kentico CMS</p>
            </li>
            <li>
              <p data-aos="reveal">Knowledge of SCRUM practices and Agile methodoliges</p>
            </li>
            <li>
              <p data-aos="reveal">GIT / Bitbucket code versioning tools</p>
            </li>
            <li>
              <p data-aos="reveal">Web Accessibility</p>
            </li>
            <li>
              <p data-aos="reveal">Understanding of UX/UI design processes</p>
            </li>
            <li>
              <p data-aos="reveal">Software of choice: Visual Studio Code</p>
            </li>
            <li>
              <p data-aos="reveal">Sprint planning and Project Management</p>
            </li>
            <li>
              <p data-aos="reveal">Lightroom</p>
            </li>
            <li>
              <p data-aos="reveal">GSAP</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="about__websites">
        <div class="col-10 offset-1 col-xl-8 offset-xl-1">
          <p class="link about__website"><a href="https://paperlondon.com/">Paper London</a></p>
          <p>/</p>
          <p class="link about__website"><a href="https://www.anassa.com/">Anassa</a></p>
          <p>/</p>
          <p class="link about__website"><a href="https://www.almyra.com/">Almyra</a></p>
          <p>/</p>
          <p class="link about__website"><a href="https://www.annabelle.com.cy/">Annabelle</a></p>
          <p>/</p>
          <p class="link about__website"><a href="https://www.thecollective.com/">The Collective</a></p>
        </div>
      </div>-->
      <div class="col-10 offset-1">
        <div class="about__timeline">
          <div
              v-for="(item, index) in items"
              :key="index"
              data-aos="slide-in-right"
              :class="item.class"
              class="about__block"
          >
            <div class="row">
              <div class="col-12 col-lg-4">
                <p class="about__date">{{ item.date }}</p>
              </div>
              <div class="col-12 col-lg-4">
                <p class="about__timeline-body about__timeline-body--medium">{{ item.role }}</p>
              </div>
              <div class="col-12 col-lg-4">
                <p class="about__timeline-body about__timeline-body--right">{{ item.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  components: {},
  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            date: '2018 Nov - 2020 July',
            role: 'Junior Frontend Developer',
            location: 'Matter Of Form, London',
          },
          {
            date: '2018 June - Sept',
            role: 'Web Development Immersive Course',
            location: 'General Assembly, London',
          },
          {
            date: '2017 Nov - 2019 April',
            role: 'Associate Implementation Consultant',
            location: 'Confluence, London',
          },
          {
            date: '2015 - 2017',
            role: 'Implementation Consultant',
            location: 'Concep, London',
          },
          {
            date: '2012 - 2015',
            role: 'BSc Computer Science',
            location: 'University of Leicester',
            class: 'first',
          },
        ];
      },
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/atomic/components/_about.scss';
</style>
