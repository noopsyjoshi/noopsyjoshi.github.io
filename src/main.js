import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import SkewAnimation from './utils/skewAnimation.js';
import SplittingAnimation from './utils/splitting.js';
import VuePlyr from 'vue-plyr';


Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false },
  },
  emit: ['ended'],
});


Vue.config.productionTip = false;

new Vue({
  router,

  // watch: {
  //   '$route'(to, from) {
  //   },
  // },

  mounted() {   
 
    AOS.init({
      startEvent: 'load',
      once: 'true',
    });

    this.$nextTick(() => {
      this.splitInit();
      // SkewAnimation();
    });

    router.afterEach((to, from, next) => {
      this.$nextTick(() => {
        this.splitInit();
        // SkewAnimation();
      });

      window.scrollTo(0, 0);
    });
  },

  destroyed() {
    AOS.refresh();
  },

  updated() {
    AOS.update();
  },

  methods: {
    splitInit() {
      SplittingAnimation();
    },
  },

  render: (h) => h(App),
}).$mount('#app');
