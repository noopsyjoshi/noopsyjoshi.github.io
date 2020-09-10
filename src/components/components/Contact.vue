<template>
  <section id="contact" class="contact">
    <div class="row">
      <div class="col-10 offset-1">
        <p class="contact__email d-split" data-aos="slide-up-body">
          Drop me a line<br>
          <a class="contact__anchor link" href="mailto:noopur.joshi13@gmail.com">
            noopur.joshi13@gmail.com</a>
        </p>
       
        <div data-aos="fade-in" data-aos-delay="600" class="contact__links">
          <div class="contact__location">
            <Location class="contact__icon" />
            <p class="d-split contact__link">London</p>
          </div>
          <p>
            <a target="_blank" class="d-split link contact__link contact__link-span" href="github.com/noopsyjoshi/">GitHub</a>
          </p>
          <p>
            <a target="_blank" class="d-split link contact__link contact__link-span" href="https://www.linkedin.com/in/noopurjoshi/">LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/scss/atomic/components/_contact.scss';
</style>

<script>
import Location from '@/assets/icons/location.svg';

export default {
  components: {
    Location,
  },
};
</script>
