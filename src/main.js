import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.min.css';

Vue.config.productionTip = false;

new Vue({
  router,

  data() {
    return {};
  },

  mounted() {
    AOS.init({
      startEvent: 'load',
      once: 'true',
    });

    this.$nextTick(() => {
      this.splitInit();
      // this.lmsInit();
    });

    // this.lmS.init();

    router.afterEach((to, from, next) => {
      this.$nextTick(() => {
        this.splitInit();
        // this.lmsUpdate();
      });

      window.scrollTo(0, 0);
    });
  },

  destroyed() {
    AOS.refresh();
  },

  updated() {
    AOS.update();
    // this.lmsUpdate();
  },

  methods: {
    splitInit() {
      const animateText = Array.from(document.querySelectorAll('.d-split'));
      animateText.forEach((text) => {
        Splitting({
          target: text,
          by: 'chars',
        });
      });
    },

    // lmsInit() {
    //   this.lmS = new LocomotiveScroll({
    //     el: document.querySelector('.scroll-container'),
    //     smooth: true,
    //   });
    // },

    // lmsUpdate() {
    //   this.lms.update();
    // },
  },

  render: (h) => h(App),
}).$mount('#app');
