<template>
  <section class="video">
    <vue-plyr>
      <div class="plyr__video-embed">
        <iframe ref="player"
            :src="videoSrc"
            allowfullscreen allowtransparency allow="autoplay"
        />
      </div>
    </vue-plyr>
  </section>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true,
      default: '456917037',
    },
  },
  computed: {
    videoSrc() {
      return `https://player.vimeo.com/video/${this.videoId}?title=0&byline=0&portrait=0`;
    },
  },
  mounted() {
    this.$refs.player.controls = 'false';
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/atomic/components/_video.scss';
</style>
