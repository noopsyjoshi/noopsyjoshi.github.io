<template>
  <section id="about" data-color="bg--blue-dark" class="about">
    <div class="col-10 offset-1">
      <h2 data-aos="slide-up-heading" class="d-split section__title">A little<br>something about me</h2>
    </div>
    <div class="col-10 offset-1 col-md-8 col-xl-6 offset-xl-2">
      <div class="about__body">
        <p data-aos="rotate-in">
          Hi, I'm Noopur Joshi, a <span class="about__highlights">front-end developer</span> living in <span class="about__highlights">London</span>, fuelled by creative designs, clean code, chai, glitter & <span class="about__highlights">pixel perfection</span>. Over the last couple of years, I’ve had the privilege to collaborate with some of the most talented people in the industry on a range of projects including <span class="about__highlights">e-commerce and hospitality.</span> I pride myself with going above and beyond to bring creative designs to life with great design and technical accuracy.<br><br>In my free time I enjoy listening to music, <span class="about__highlights">travelling</span> (my dream is to visit Japan), keeping up with web design trends on awwwards, <span class="about__highlights">photography</span> and resisting the urge to buy <span class="about__highlights">more plants</span>.<br><br>Portfolio created with Vue, GSAP & AOS. Typeface &mdash; Neue Montreal by Pangrampangram, Text animation &mdash; Splitting.js. Image effect &mdash; using Robin Dela's hover effect. &#169;Noopur Joshi.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1 col-xl-4 offset-xl-2"><h4 class="about__skills-title">Technical and Soft Skills</h4></div>
      <div class="col-10 offset-1 col-xl-6 offset-xl-0">
        <div class="about__skills">
          <ul>
            <li>
              <p data-aos="reveal">Javascript, SASS, HTML</p>
            </li>
            <li>
              <p data-aos="reveal">CSS Animations</p>
            </li>
            <li>
              <p data-aos="reveal">Vue.js & Nuxt.js</p>
            </li>
            <li>
              <p data-aos="reveal">Handlebars.js</p>
            </li>
            <li>
              <p data-aos="reveal">Understanding of React.js</p>
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
          </ul>
        </div>
      </div>
    </div>
    <div class="col-10 offset-1">
      <div class="about__timeline">
        <div
            v-for="(item, index) in items"
            :key="index"
            data-aos="slide-in-right"
            :class="item.class"
            class="about__block"
        >
          <div class="align-items-end row">
            <div class="col-12 col-lg-4">
              <p class="about__date">{{ item.startDate }} &mdash; {{ item.endDate }}</p>
            </div>
            <div class="col-12 col-lg-4">
              <p class="about__timeline-body about__timeline-body--medium">{{ item.role }}</p>
            </div>
            <div class="col-12 col-lg-4">
              <p class="about__timeline-body about__timeline-body--right">@{{ item.location }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 offset-3" />
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
            startDate: '2018 Nov',
            endDate: '2020 July',
            role: 'Junior Frontend Developer',
            location: 'Matter Of Form, London',
          },
          {
            startDate: '2018 June',
            endDate: 'Sept',
            role: 'Web Development Immersive Course',
            location: 'General Assembly, London',
          },
          {
            startDate: '2017 Nov',
            endDate: '2018 April',
            role: 'Associate Implementation Consultant',
            location: 'Confluence, London',
          },
          {
            startDate: '2015 Oct',
            endDate: '2017 Oct',
            role: 'Implementation Consultant',
            location: 'Concep, London',
          },
          {
            startDate: '2012',
            endDate: '2015',
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
