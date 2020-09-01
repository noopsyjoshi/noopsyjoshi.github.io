<template>
  <section data-aos="bg-color" class="hero">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="hero__heading-wrapper">
          <h1 data-scroll data-aos="slide-up-text" class="d-split hero__heading">Hi, I'm Noops, Frontend Developer & Chai Lover</h1>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  components: {
  },

  beforeCreate: function() {
    document.body.className = 'bg--dark';
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/atomic/components/_hero.scss';
</style>
