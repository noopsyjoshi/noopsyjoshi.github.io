import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

const ScrollTo = ($el) => {
  Vue.use(VueScrollTo, {
    duration: 1200,
    easing: 'ease-out',
  });

};

export default ScrollTo;
