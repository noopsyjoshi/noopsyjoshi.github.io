<template>
  <div v-if="loading" class="loader" :class="{ 'loader--loaded': loading && loadingFinished }" />
  <!-- <div class="loader" /> -->
</template>

<script>
export default {
  data: () => ({
    loading: false,
    loadingFinished: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      if (this.$el) {
        this.loadingFinished = true;
        this.$el.addEventListener('animationend', () => {
          this.loadingFinished = false;
          this.loading = false;
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/atomic/components/_loader.scss';
</style>
