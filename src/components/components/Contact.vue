<template>
  <section id="contact" class="contact">
    <div class="col-10 offset-1">
      <div class="contact__heading-wrapper">
        <h2 class="contact__heading">Drop me a line</h2>
      </div>
      <div class="contact__links">
        <div class="contact__block">
          <Email class="contact__icon" />
          <a class="contact__link" href="#">noopur.joshi13@gmail.com</a>
        </div>
        <div class="contact__block">
          <GitHub class="contact__icon" />
          <a class="contact__link" href="#">noopur.joshi13@gmail.com</a>
        </div>
        <div class="contact__block">
          <LinkedIn class="contact__icon" />
          <a class="contact__link" href="#">noopur.joshi13@gmail.com</a>
        </div>
        <div class="contact__block">
          <Location class="contact__icon" />
          <a class="contact__link" href="#">noopur.joshi13@gmail.com</a>
        </div>
      </div>
      <Arrow class="hero__arrow hero__arrow--top" />
    </div>
  </section>
</template>

<style lang="scss">
@import '../../assets/scss/atomic/components/_contact.scss';
</style>

<script>
import Arrow from '../../assets/icons/down-arrow.svg'
import Email from '../../assets/icons/email.svg'
import GitHub from '../../assets/icons/github.svg'
import LinkedIn from '../../assets/icons/linkedin.svg'
import Location from '../../assets/icons/location.svg'

export default {
  components: {
    Arrow, Email, GitHub, LinkedIn, Location
  }
}
</script>
