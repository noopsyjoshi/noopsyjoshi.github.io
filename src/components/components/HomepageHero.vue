<template>
  <section id="hero" data-aos="bg-color" class="hero">
    <div class="row">
      <div class="col-10 offset-1 col-md-9 col-xl-10">
        <div class="hero__heading-wrapper">
          <h1 data-scroll data-aos="slide-up-heading" class="d-split hero__heading">
            <span class="hero__span">Hi, I'm Noops</span>
            <span class="hero__span">Frontend Developer</span>
            <span class="hero__span">& Chai Lover</span>
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  beforeCreate: function() {
    document.body.className = 'bg--dark';
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/atomic/components/_hero.scss';
</style>
