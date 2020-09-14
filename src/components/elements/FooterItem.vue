<template>
  <footer class="footer" role="footer">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="footer__flex">
          <button v-scroll-to="{ el: 'link', duration: 2000, easing: [0.64, 0, 0.78, 0] }" class="link footer__button">
            Back to top
          </button>
          <p class="footer__body">Made by Noopur Joshi</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/atomic/components/_footer.scss';
</style>


<script>
import ScrollTo from '@/utils/scrollTo.js';

export default {
  props: {
    link: {
      type: String,
      default: () => '',
    },
  },
  
  created() {
    ScrollTo();
  },
};
</script>
