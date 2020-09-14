<template>
  <div class="col-10 offset-1">
    <div class="image-grid">
      <div v-for="(image, index) in images" :key="index" class="image-grid__item">
        <figure data-aos="reveal-image-right" class="reveal-image-right reveal-image-right--dark image-grid__wrapper">
          <img data-aos="zoom-image" class="projects__project-image reveal-image" :src="require(`@/assets/images/projects/${image.url}`)" :alt="image.alt">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/scss/atomic/components/_project.scss';

export default {
  props: {
    images: {
      type: Array,
      default() {
        return [
          {
            image: {
              type: Object,
              default() {
                return {
                  url: { type: String, required: true },
                  description: { type: String, required: true },
                };
              },
            },
          },
          {
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
          {
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
          {
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
          {
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
        ];
      },
    },
  },
};
</script>
