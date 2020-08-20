<template>
  <section class="hero">
    <div class="col-10 offset-1">
      <div class="hero__heading-wrapper">
        <h1 class="data-splitting hero__heading">Hi, I'm Noops<br>Frontend Developer<br>and Chai Lover</h1>
      </div>
      <Arrow class="hero__arrow" />
    </div>
  </section>
</template>

<script>
import Arrow from '../../assets/icons/down-arrow.svg';

export default {
  components: {
    Arrow,
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/atomic/components/_hero.scss';
</style>
