<template>
  <div :class="`bg--${background}`" class="project-description">
    <span class="project-description__tag">{{ tag }}</span>
    <p data-aos="slide-up-body" class="d-split project-description__body">{{ body }}</p>
    <a class="link project-description__link" target="_blank" :href="link">&#8627;&nbsp;Go To Website</a>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    background: {
      type: String,
      required: false,
      default: '#fff',
    },
    tag: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/atomic/components/_project-description.scss';
</style>
