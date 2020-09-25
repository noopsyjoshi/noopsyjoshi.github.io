<template>
  <div class="project-hero">
    <div class="project-hero__flex">
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
      <div class="project-hero__content-wrapper">
        <span class="project-hero__index">
          {{ number }}
        </span>
        <h1 data-aos="slide-up-heading" class="d-split project-hero__title">
          {{ title }}
        </h1>
        <span data-aos="slide-up-body" class="d-split project-hero__tags">
          {{ tags }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    tags: {
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
