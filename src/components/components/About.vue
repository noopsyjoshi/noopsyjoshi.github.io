<template>
  <section id="about" class="about">
    <div class="row">
      <div class="col-10 offset-1">
        <h2 data-aos="slide-up-subheading" class="d-split section__title">About</h2>
      </div>
      <div class="col-10 offset-1 col-md-8">
        <div class="about__overview">
          <p data-aos="slide-up-body" class="about__intro d-split">
            I'm Noopur Joshi, a frontend developer living in London, fuelled by creative designs, clean code, chai, glitter & pixel perfection.
          </p>
        </div>
      </div>
      <div class="col-10 offset-1 col-md-8 col-lg-7 col-xl-5 offset-xl-2">
        <div class="about__skills">
          <p class="about__body" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="2000">Over the last couple of years, I’ve had the privilege to collaborate with some of the most talented people in the industry on a range of projects including e-commerce and hospitality. Expertise in HTML, SCSS, JavaScript, Shopify e-commerce platform, Handlebars, Git Version Control, sprint planning, communication with project managers, clients and partners and good understanding of UX and UI designs. I pride myself with going above and beyond to bring creative designs to life with great design and technical accuracy.</p>
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
      </div> -->
      <div class="col-10 offset-1">
        <h2 data-aos="slide-up-subheading" class="d-split section__title section__title--low-spacer">Timeline</h2>
      </div>
      <div class="col-10 offset-1">
        <div class="about__timeline">
          <div v-for="(item, index) in items" :key="index" data-aos="slide-in-right" :class="item.class" class="about__block">
            <div class="row">
              <div class="col-12 col-lg-4">
                <p class="about__date">{{ item.date }}</p>
              </div>
              <div class="col-12 col-lg-4">
                <p class="about__timeline-body">{{ item.role }}</p>
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
            date: '2017 Nov - 2019 April',
            role: 'Associate Implementation Consultant',
            location: 'Confluence, London',
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
