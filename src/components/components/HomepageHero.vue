<template>
  <section id="hero" data-color="bg--grey-light" class="hero">
    <canvas id="mousetrail" class="hero__draw" />
    <div class="row">
      <div class="col-10 offset-1 col-md-9 col-xl-10">
        <div class="hero__heading-wrapper">
          <h1 data-scroll data-aos="slide-up-heading" class="d-split hero__heading">
            <!-- FOLIO OF NOOPS DEVELOPER & CHAI LOVER -->
            <span class="hero__span">FOLIO OF NOOPS,</span>
            <span class="hero__span">DEVELOPER</span>
            <span class="hero__span">& PLANT MUM</span>
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {


};
</script>

<style lang="scss">
@import '@/assets/scss/atomic/components/_hero.scss';

.image-hover {
  display: none;
}
</style>
