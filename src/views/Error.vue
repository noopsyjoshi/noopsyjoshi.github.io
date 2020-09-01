<template>
  <section>
    <custom-cursor cursor-color="white" />
    <div class="col-10 offset-1">
      <div class="error">
        <h2 class="error__title">404 Page Not Found</h2>
        <div ref="view" class="error__view">
          <img class="error__image" src="@/assets/images/breen.gif" alt="Gif of Neil Breen spilling coffee">
          <p class="error__body">No Fateful Findings here, please go <router-link class="link error__link" :to="{ name: 'home'}">home </router-link></p>
        </div>
        <div ref="viewTwo" class="error__view">
          <video class="error__video" muted autoplay loop>
            <source src="@/assets/images/jurassic-park.mp4" type="video/mp4">
          </video>
          <p class="error__body">
            The park is closed, please go <router-link class="link error__link" :to="{ name: 'home'}">home </router-link>
          </p>
        </div>
      </div>
    </div>
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
  beforeCreate: function() {
    document.body.className = 'bg--dark';
  },
  created() {
    this.number = Math.round(Math.random());
  },
  mounted() {
    this.randomizeView();
  },
  methods: {
    randomizeView: function() {
      this.views.push(this.$refs.view, this.$refs.viewTwo);
      this.views[this.number].classList.add('active');
    },
  },
};
</script>
