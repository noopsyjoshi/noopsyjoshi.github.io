<template>
  <section id="about" class="about">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="reveal-text-wrapper">
          <h2 data-aos="slide-up-text" class="d-split section__title">About</h2>
        </div>
      </div>
      <div class="about__overview">
        <div class="col-10 offset-1 col-md-8 offset-md-1 col-xl-5 offset-xl-2">
          <p data-aos="slide-up-body" class="about__body d-split">
            I'm a frontend developer living in London, fuelled by ramen, chai, glitter & pixel perfection. Over the last couple of years, I’ve had the privilege to collaborate with some of the most talented people in the industry on a range of projects including e-commerce and hospitality. My main pool of skills involve HTML, SCSS, JavaScript, Vue.js, Handlebars and Shopify.
          </p>
        </div>
      </div>
      <div class="about__skills">
        <div class="col-10 offset-1 col-md-8 offset-md-1 col-xl-5 offset-xl-2">
          <p data-aos="slide-up-body" class="about__body d-split">
            Expertise in HTML, SCSS, JavaScript, Shopify e-commerce platform, Handlebars, Git Version Control, sprint planning, communication with project managers, clients and partners and good understanding of UX and UI designs. I pride myself with going above and beyond to bring creative designs to life with great design and technical accuracy.
          </p>
        </div>
      </div>
      <div class="col-10 offset-1 col-xl-8 offset-xl-1">
        <p data-aos="slide-up-text" class="d-split section__subtitle about__subtitle">Client Sites</p>
        <div data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1000" class="about__websites">
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
      </div>
      <div class="col-10 offset-1">
        <div class="about__timeline">
          <p data-aos="slide-up-text" class="d-split section__subtitle">Timeline</p>
          <div v-for="(item, index) in items" :key="index">
            <div data-aos-easing="smooth" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000" :class="item.class" class="about__block">
              <div class="row">
                <div class="col-12 col-lg-4">
                  <p class="about__date">{{ item.date }}</p>
                </div>
                <div class="col-12 col-lg-4">
                  <p class="about__timeline-body">{{ item.role }}</p>
                </div>
                <div class="col-12 col-lg-4">
                  <p class="about__timeline-body--right">{{ item.location }}</p>
                </div>
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
  components: {
  },
  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            date: '2012 - 2015',
            role: 'BSc Computer Science',
            location: 'University of Leicester',
            class: 'first',
          },
          {
            date: '2015 - 2017',
            role: 'Implementation Consultant',
            location: 'Concep, London',
          },
          {
            date: '2018 June - Sept',
            role: 'Web Development Immersive Course',
            location: 'General Assembly, London',
          },
          {
            date: '2018 Nov - 2020 July',
            role: 'Junior Frontend Developer',
            location: 'Matter Of Form, London',
          },
        ];
      },
    },
  },

  created() {
    document.body.classList.remove('bg--white');
    document.body.classList.add('bg--dark');
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/atomic/components/_about.scss';
</style>
