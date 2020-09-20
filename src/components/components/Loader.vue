<template>
  <section class="loader">
    <p class="loader__body">
      Move your mouse
      <br>to colour the screen
    </p>
    <canvas id="mousetrail" />
    <div class="iCountUp">
      <div class="counter__wrapper">
        <ICountUp
            class="counter"
            :class="{ active: isActive }"
            :delay="delay"
            :duration="duration"
            :end-val="endVal"
            :options="options"
            @ready="onReady"
        />
      </div>
    </div>
    <p :class="{ hidden: isActive }" class="loader__enter">Enter</p>
  </section>
</template>

<script type="text/babel">
import ICountUp from 'vue-countup-v2';
export default {
  name: 'Demo',
  components: {
    ICountUp,
  },
  data() {
    return {
      isActive: true,
      delay: 1000,
      endVal: 100,
      options: {
        duration: 10,
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '%',
      },
    };
  },
  methods: {
    onReady: function(instance, CountUp) {
      const that = this;
      instance.update(that.endVal);
      this.end();
    },

    end() {
      console.log('its ended angie');
      this.isActive = false;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/atomic/components/_loader.scss';
</style>
