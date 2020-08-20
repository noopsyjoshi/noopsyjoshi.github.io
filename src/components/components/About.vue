<template>
  <section id="about" class="about">
    <div class="col-10 offset-1">
      <p class="about__body about__body--large">I’m Noopur Joshi, a frontend developer living in London, fuelled by ramen, chai, glitter & pixel perfection.</p>
      <p class="about__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p class="about__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div class="about__timeline">
        <div v-for="(item, index) in items" :key="index">
          <div class="about__block">
            <div class="row">
              <div class="col-12 col-md-4">
                <p class="about__date">{{ item.date }}</p>
              </div>
              <div class="col-12 col-md-4">
                <p class="about__role">{{ item.role }}</p>
              </div>
              <div class="col-12 col-md-4">
                <p class="about__location">{{ item.location }}</p>
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
            date: '2012 - 2015',
            role: 'BSc Computer Science',
            location: 'University of Leicester',
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
};
</script>

<style lang="scss">
@import '../../assets/scss/atomic/components/_about.scss';
</style>
