import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BgColorFade from './utils/bgColorFade.js';
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
      this.bgFadeInit();
    });

    router.afterEach((to, from, next) => {
      this.$nextTick(() => {
        this.splitInit();
        this.bgFadeInit();
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

    bgFadeInit() {
      BgColorFade();
    },
  },

  render: (h) => h(App),
}).$mount('#app');
