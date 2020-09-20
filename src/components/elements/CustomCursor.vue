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
    this.projects = Array.from(document.querySelectorAll('.projects__figure'));

    this.navigations.forEach((nav) => {
      nav.addEventListener('mouseover', this.hoverCursor);
    });

    this.navigations.forEach((nav) => {
      nav.addEventListener('mouseout', this.hoverCursorOut);
    });

    this.projects.forEach((project) => {
      project.addEventListener('mouseover', this.hoverCursorProject);
    });

    this.projects.forEach((project) => {
      project.addEventListener('mouseout', this.hoverCursorOutProject);
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

    // Projects
    hoverCursorProject() {
      this.cursorOuter.classList.add('cursor--projects');

      TweenMax.to(this.cursorInner, 0.1, {
        opacity: 1,
        scale: 0,
      });
      
      TweenMax.to(this.cursorOuter, 0.3, {
        scale: 5,
        opacity: 1,
      });
    },

    hoverCursorOutProject() {
      this.cursorOuter.classList.remove('cursor--projects');

      TweenMax.to(this.cursorInner, 0.1, {
        opacity: 1,
        scale: 1,
      });

      TweenMax.to(this.cursorOuter, 0.3, {
        scale: 1,
        opacity: 1,
      });
    },
  },
};

</script>
