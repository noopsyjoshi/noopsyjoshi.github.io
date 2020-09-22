<template>
  <div class="project-hero">
    <div class="project-hero__intro-block">
      <h1 data-aos="slide-up-heading" class="d-split project-hero__title">
        {{ title }}
      </h1>
    </div>
    <figure
        data-aos="reveal-image-up"
        class="reveal-image-up project-hero__figure"
    >
      <img
          data-aos="zoom-image"
          class="project-hero__image project-hero__image--showcase reveal-image"
          :src="require(`@/assets/images/${image.url}`)"
          :alt="image.description"
      >
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      default() {
        return {
          url: { type: String },
          description: { type: String },
        };
      },
    },
  },

};
</script>

<style lang="scss">
@import '@/assets/scss/atomic/components/_project-hero.scss';
</style>
