<template>
  <section id="about" data-color="bg--blue-dark" class="about">
    <div class="row">
      <div class="col-10 offset-1">
        <h2 data-aos="rotate-in" class="about__title">
          A little <br>something about me
        </h2>
      </div>
      <div class="col-10 offset-1">
        <p
            class="about__body"
            data-aos="fade-in"
            data-aos-duration="duration"
            data-aos-delay="1000"
        >
          Hi, I'm
          <span class="hover-item">
            <img src="@/assets/images/about/noopur.jpg">Noopur Joshi
          </span>, a front-end developer living in
          <span class="hover-item">
            <img
                src="https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            >London
          </span>, fuelled by creative designs, clean code,  <span class="hover-item">
            <img src="@/assets/images/about/chai.jpg">chai
          </span>, glitter &
          pixel perfection. Over the last couple of years, I’ve had the privilege to collaborate with some of the most talented people in the industry on a range of projects including hospitality and e-commerce. I pride myself with going above and beyond to bring creative designs to life with great design and technical accuracy.
          <br>
          <br>In my free time I enjoy listening to <span class="hover-item">
            <img src="@/assets/images/about/floyd.jpeg">music
          </span>, travelling (my dream is to visit
          <span class="hover-item">
            <img
                src="https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?cs=srgb&dl=pexels-pixabay-161251.jpg&fm=jpg"
            >Japan
          </span>), keeping up with web design trends on awwwards,
          <span class="hover-item">
            <img src="https://images.pexels.com/photos/4424567/pexels-photo-4424567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">photography
          </span> and resisting the urge to buy
          <span class="hover-item">
            <img
                src="https://images.pexels.com/photos/1831256/pexels-photo-1831256.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1831256.jpg&fm=jpg"
            >more plants
          </span>.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-3 offset-2">
        <h4 class="about__subtitle">Technical Skills</h4>
      </div>
      <div class="col-6 offset-1">
        <div class="about__skills-list">
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
              <p data-aos="reveal">Kentico CMS</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3 offset-2">
        <h4 class="about__subtitle">Software</h4>
      </div>
      <div class="col-6 offset-1">
        <div class="about__skills-list">
          <ul>
            <li>
              <p data-aos="reveal">Sketch</p>
            </li>
            <li>
              <p data-aos="reveal">Figma</p>
            </li>
            <li>
              <p data-aos="reveal">Visual Studio Code</p>
            </li>
            <li>
              <p data-aos="reveal">Lightroom</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3 offset-2">
        <h4 class="about__subtitle">Other</h4>
      </div>
      <div class="col-6 offset-1">
        <div class="about__skills-list">
          <ul>
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
              <p data-aos="reveal">Sprint planning and Project Management</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3 offset-2">
        <h4 class="about__subtitle">Colophon</h4>
      </div>
      <div class="col-5 offset-1">
        <div class="about__skills-list">
          <p>Portfolio created with Vue.js, Splitting.js, GSAP & AOS. Typeface &mdash; Neue Montreal by Pangrampangram, &mdash; Image effect &mdash; using Robin Dela's hover effect. &#169; Noopur Joshi.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="10 offset-1">
        <div data-aos="counter" class="iCountUp">
          <div class="counter__wrapper">
            <ICountUp
                ref="counter"
                class="counter"
                :class="{ active: isActive }"
                :delay="delay"
                :end-val="endVal"
                :options="options"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
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
import ICountUp from 'vue-countup-v2';

export default {
  components: {
    ICountUp,
  },
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
  data() {
    return {
      isActive: false,
      delay: 1000,
      endVal: 2020,
      options: {
        duration: 10,
        startVal: 1993,
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
        prefix: '1993 -',
      },
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      console.log(this.$refs.counter);
      console.log('scrolling');
    },

    // onReady: function(instance, CountUp) {
    //   const that = this;
    //   instance.update(that.endVal);
    // },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/atomic/components/_about.scss';
@import '@/assets/scss/atomic/elements/_counter.scss';
</style>
