<template>
  <div class="project-description">
    <div class="project-description__flex">
      <figure
          data-aos="reveal-image-up"
          class="reveal-image-up project-description__figure"
      >
        <img
            data-aos="zoom-image"
            class="project-description__image project-description__image--showcase reveal-image"
            :src="require(`@/assets/images/${image.url}`)"
            :alt="image.description"
        >
      </figure>
      <h1 data-aos="slide-up-heading" class="d-split project-description__title">
        {{ title }}
      </h1>
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
@import '@/assets/scss/atomic/components/_project-description.scss';
</style>
