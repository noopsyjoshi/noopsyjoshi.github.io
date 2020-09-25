<template>
  <div class="project-description-image">
    <div class="project-description-image__content-wrapper">
      <span class="project-description__tag">{{ tag }}</span>
      <p data-aos="slide-up-body" class="d-split project-description-image__body">{{ body }}</p>
    </div>
    <figure
        data-aos="reveal-image-up"
        class="reveal-image-up project-description-image__figure"
    >
      <img
          data-aos="zoom-image"
          class="project-description-image__image reveal-image"
          :src="require(`@/assets/images/${image.url}`)"
          :alt="image.description"
      >
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
    body: {
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
@import '@/assets/scss/atomic/components/_project-description-image.scss';
@import '@/assets/scss/atomic/components/_project-description.scss';
</style>
