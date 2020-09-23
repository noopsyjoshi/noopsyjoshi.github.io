<template>
  <div class="cursor">
    <div ref="cursorInner" class="cursor cursor--inner" />
    <div ref="cursorOuter" class="cursor cursor--outer" />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/atomic/elements/_cursor.scss';
</style>

<script>
import { TweenMax } from 'gsap/all';

export default {
  props: {
  },

  mounted() {
    window.addEventListener('mousemove', this.moveCursor);

    this.cursorInner = this.$refs.cursorInner;
    this.cursorOuter = this.$refs.cursorOuter;

    this.navigations = Array.from(document.querySelectorAll('.link'));

    this.navigations.forEach((nav) => {
      nav.addEventListener('mouseover', this.hoverCursor);
    });

    this.navigations.forEach((nav) => {
      nav.addEventListener('mouseout', this.hoverCursorOut);
    });    
  },

  methods: {
    moveCursor() {
      if (this.cursorInner && this.cursorOuter) {
        TweenMax.to(this.cursorInner, 0.1, {
          x: event.clientX,
          y: event.clientY,
        });

        TweenMax.to(this.cursorOuter, 0.3, {
          x: event.clientX,
          y: event.clientY,
        });
      }
    },

    // Navigation
    hoverCursor() {
      TweenMax.to(this.cursorInner, 0.1, {
        opacity: 1,
        scale: 0,
      });
      
      TweenMax.to(this.cursorOuter, 0.3, {
        scale: 3,
      });
    },

    hoverCursorOut() {
      TweenMax.to(this.cursorInner, 0.1, {
        opacity: 1,
        scale: 1,
      });

      TweenMax.to(this.cursorOuter, 0.3, {
        scale: 1,
      });
    },
  },
};

</script>
