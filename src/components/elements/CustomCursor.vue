<template>
  <div class="cursor">
    <div ref="cursorInner" class="cursor cursor--inner"></div>
    <div ref="cursorOuter" class="cursor cursor--outer"></div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/atomic/elements/_cursor.scss';
</style>

<script>
import { TweenMax } from 'gsap/all'

export default {
  created () {
    window.addEventListener('mousemove', this.moveCursor)
  },

  destroyed () {
    window.removeEventListener('mousemove', this.moveCursor())
  },

  mounted () {
    this.cursorInner = this.$refs.cursorInner
    this.cursorOuter = this.$refs.cursorOuter
  },

  methods: {
    moveCursor () {
      TweenMax.to(this.cursorInner, 0.3, {
        x: event.clientX,
        y: event.clientY
      })

      TweenMax.to(this.cursorOuter, 0.5, {
        x: event.clientX,
        y: event.clientY
      })
    }
  }

}

</script>
