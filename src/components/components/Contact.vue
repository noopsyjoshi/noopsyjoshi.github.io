<template>
  <section class="contact">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="reveal-text-wrapper">
          <h2 data-aos="slide-up-text" class="d-split section__title">Contact</h2>
        </div>
        <div class="contact__links">
          <div data-aos-easing="smooth" data-aos="fade-in" data-aos-duration="1000" class="contact__block">
            <Email class="contact__icon" />
            <p>  
              <a class="contact__link" href="mailto:noopur.joshi13@gmail.com">noopur.joshi13@gmail.com</a>
            </p>
          </div>
          <div data-aos-easing="smooth" data-aos="fade-in" data-aos-duration="1000" class="contact__block">
            <p>
              <GitHub class="contact__icon" />
              <a class="contact__link" href="github.com/noopsyjoshi/">github.com/noopsyjoshi/</a>
            </p>
          </div>
          <div data-aos-easing="smooth" data-aos="fade-in" data-aos-duration="1000" class="contact__block">
            <p>
              <LinkedIn class="contact__icon" />
              <a class="contact__link" href="https://www.linkedin.com/in/noopurjoshi/">linkedin.com/in/noopurjoshi/</a>
            </p>
          </div>
          <div data-aos-easing="smooth" data-aos="fade-in" data-aos-duration="1000" class="contact__block">
            <Location class="contact__icon" />
            <p class="contact__link">London</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/scss/atomic/components/_contact.scss';
</style>

<script>
import Email from '@/assets/icons/email.svg';
import GitHub from '@/assets/icons/github.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';
import Location from '@/assets/icons/location.svg';

export default {
  components: {
    Email, GitHub, LinkedIn, Location,
  },
};
</script>
