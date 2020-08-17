import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Splitting from 'splitting';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');


Splitting({
  target: '[data-splitting]',
  by: 'chars',
  key: null,
});


// window.onload = function() {
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//   });
//   scroll.init();
// };


