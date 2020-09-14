<template>
  <a class="website-link"
      target="_blank"
      :href="link"
  >
    <img
        class="website-link__image"
        src="@/assets/images/seewebsite.png"
    >
  </a>
</template>

<script>
import '@/assets/scss/atomic/elements/_website-link.scss';

export default {
  props: {
    link: {
      type: String,
      default: () => '',
    },
  },
};
</script>
