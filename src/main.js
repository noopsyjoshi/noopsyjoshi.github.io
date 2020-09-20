import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import BgColorFade from './utils/bgColorFade.js';
import ProjectsAnimation from './utils/curtains.js';
import SplittingAnimation from './utils/splitting.js';
import Draw from './utils/draw.js';
import hoverEffect from './utils/hoverEffect.js';
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
    ProjectsAnimation();
    // SkewAnimation();


    Array.from(document.querySelectorAll('.projects__figure')).forEach((el) => {
      const imgs = Array.from(el.querySelectorAll('img'));
      new hoverEffect({
        parent: el,
        // intensity: el.dataset.intensity || undefined,
        // speedIn: el.dataset.speedin || undefined,
        // speedOut: el.dataset.speedout || undefined,
        // easing: el.dataset.easing || undefined,
        // hover: el.dataset.hover || undefined,
        image1: imgs[0].src,
        image2: imgs[1].src,
        displacementImage: el.dataset.displacement,
      });
    });
    

    AOS.init({
      startEvent: 'load',
      once: 'true',
    });

    this.$nextTick(() => {
      this.splitInit();
      // this.bgFadeInit();

      
      Draw();
    });

    router.afterEach((to, from, next) => {
      this.$nextTick(() => {
        this.splitInit();
        // this.bgFadeInit();
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
      // BgColorFade();
    },
  },

  render: (h) => h(App),
}).$mount('#app');


