<template>
  <div class="project-hero">
    <div class="project__intro-block">
      <h1 data-aos="slide-up-body" class="d-split project__title">
        {{ title }}
      </h1>
    </div>
    <figure
        data-aos="reveal-image-up"
        class="project-hero__figure reveal-image-up reveal-image-up--grey"
    >
      <img
          data-aos="zoom-image"
          class="project-hero__image project__image--showcase reveal-image"
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
