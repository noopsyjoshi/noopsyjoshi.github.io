import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import AOS from 'aos';
import 'aos/dist/aos.css';
import _ from 'lodash';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.min.css';

Vue.config.productionTip = false;
const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

new Vue({
  router,

  data() {
    return {};
  },

  // watch: {
  //   '$route'(to, from) {
  //     this.transitionName = 'overlay';
  //     console.log(this.transitionName);
  //   },
  // },

  mounted() {
    AOS.init({
      startEvent: 'load',
      once: 'true',
    });

    this.$nextTick(() => {
      this.splitInit();
      // this.lmsInit();
    });

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
      console.log('into split');
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


window.onload = function() {

  const projects = document.querySelector('.projects__block');
  let prevPos = window.pageYOffset;

  const initSkew = function() {
    const newPos = window.pageYOffset;
    const diff = newPos - prevPos;
    const speed = _.clamp(diff * 0.07, -10, 10);

    projects.style.transform = `skewY(${speed}deg)`;

    prevPos = newPos;

    requestAnimationFrame(initSkew);
  };

  const removeSkew = function() {
    projects.style.transform = 'none';
  };

  window.innerWidth >= 768 ? initSkew() : removeSkew();

  window.onresize = (e) => {
    (window.innerWidth >= 768) && projects ? initSkew() : removeSkew(); 
  };

};


