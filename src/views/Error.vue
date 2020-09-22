<template>
  <section class="error">
    <div class="col-10 offset-1">
      <div class="error__flex">
        <h1 class="error__title">404<br>Page not found</h1>
        <!-- <div ref="view" class="error__view">
          <img class="error__image" src="@/assets/images/breen.gif" alt="Gif of Neil Breen spilling coffee">
          <p class="error__body">No Fateful Findings here, please go <router-link class="link error__link" :to="{ name: 'home'}">home </router-link></p>
        </div> -->
        <!-- <div ref="viewTwo" class="error__view">
          <video class="error__video" muted autoplay loop>
            <source src="@/assets/images/jurassic-park.mp4" type="video/mp4">
          </video>
          <p class="error__body">
            The park is closed, please go <router-link class="link anchor__link" :to="{ name: 'home'}">home </router-link>
          </p>
        </div> -->
        <div ref="viewThree" class="active error__view">
          <img class="error__image" src="@/assets/images/jimmy-page.gif" alt="Gif of Jimmy Page">
          <p class="error__body">
            You are dazed and confused, please go <router-link class="link anchor__link" :to="{ name: 'home'}">home </router-link>
          </p>
        </div>
      </div>
    </div>
    <custom-cursor />
  </section>
</template>

<style lang="scss">
  @import '@/assets/scss/atomic/components/_error.scss';
</style>

<script>
import CustomCursor from '@/components/elements/CustomCursor.vue';

export default {
  components: {
    CustomCursor,
  },
  props: {
    views: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    this.number = Math.round(Math.random());
  },
  mounted() {
    // this.randomizeView();
  },
  methods: {
    randomizeView: function() {
      this.views.push(this.$refs.view, this.$refs.viewTwo, this.$refs.viewThree);
      this.views[this.number].classList.add('active');
    },
  },
};
</script>
