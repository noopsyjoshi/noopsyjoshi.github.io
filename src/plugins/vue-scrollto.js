import Vue from 'vue';

import VueScrollTo from '~/node_modules/vue-scrollto';

Vue.use(VueScrollTo, {
  duration: 800,
  easing: 'ease',
  offset: -90,
});
