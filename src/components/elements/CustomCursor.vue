<template>
  <div class="cursor">
    <div ref="cursorInner" class="cursor cursor--inner" />
    <div ref="cursorOuter" class="cursor cursor--outer" />
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/atomic/elements/_cursor.scss';
</style>

<script>
import { TweenMax } from 'gsap/all';

export default {
  created() {
    window.addEventListener('mousemove', this.moveCursor);
  },

  destroyed() {
    window.removeEventListener('mousemove', this.moveCursor());
  },

  mounted() {
    this.cursorInner = this.$refs.cursorInner;
    this.cursorOuter = this.$refs.cursorOuter;
    this.navigations = Array.from(document.querySelectorAll('.navigation__anchor'));
    this.projects = Array.from(document.querySelectorAll('.projects__project-image'));

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
      TweenMax.to(this.cursorInner, 0.3, {
        x: event.clientX,
        y: event.clientY,
      });

      TweenMax.to(this.cursorOuter, 0.5, {
        x: event.clientX,
        y: event.clientY,
      });
    },

    hoverCursor() {
      TweenMax.to(this.cursorInner, 0.3, {
        opacity: 1,
        scale: 0,
      });
      
      TweenMax.to(this.cursorOuter, 0.3, {
        scale: 2,
        opacity: 1,
      });
    },

    hoverCursorOut() {
      TweenMax.to(this.cursorInner, 0.3, {
        opacity: 1,
        scale: 1,
      });

      TweenMax.to(this.cursorOuter, 0.3, {
        scale: 1,
        opacity: .4,
        backgroundColor: 'transparent',
      });
    },

    hoverCursorProject() {
      console.log('hovering');
      TweenMax.to(this.cursorInner, 0.3, {
        opacity: 1,
        scale: 0,
      });
      
      TweenMax.to(this.cursorOuter, 0.3, {
        scale: 4,
        opacity: 1,
        backgroundColor: 'rgba(90, 0, 204, 1)',
        borderColor: 'rgba(90, 0, 204, 1)',
      });
    },

    hoverCursorOutProject() {
      TweenMax.to(this.cursorInner, 0.3, {
        opacity: 1,
        scale: 1,
      });

      TweenMax.to(this.cursorOuter, 0.3, {
        scale: 1,
        opacity: .4,
        backgroundColor: 'transparent',
      });
    },
  },
};

</script>
