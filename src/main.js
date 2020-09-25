/* eslint-disable no-unused-vars */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SplittingAnimation from './utils/splitting.js';
import hoverEffect from './utils/hoverEffect.js';
import VuePlyr from 'vue-plyr';
import BgColorFade from './utils/bgColorFade.js';
import ImageCursor from './utils/imageCursor.js';


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

  created() {
    AOS.init({
      startEvent: 'load',
      once: 'true',
      disable: 'mobile',
    });
  },

  mounted() {

    this.$nextTick(() => {
      this.bgSwitchInit();
      this.splitInit();
      this.hoverEffectInit();
      this.cursorImageInit();
    });

    router.afterEach((to, from, next) => {
      this.$nextTick(() => {
        this.splitInit();
        this.hoverEffectInit();
        this.bgSwitchInit();
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
    hoverEffectInit() {
      Array.from(document.querySelectorAll('.projects__figure')).forEach((el) => {
        const imgs = Array.from(el.querySelectorAll('img'));
        new hoverEffect({
          parent: el,
          image1: imgs[0].src,
          image2: imgs[1].src,
          displacementImage: el.dataset.displacement,
        });
      });
    },

    splitInit() {
      SplittingAnimation();
    },

    bgSwitchInit() {
      BgColorFade();
    },

    cursorImageInit() {
      ImageCursor();
    },
  },

  render: (h) => h(App),
}).$mount('#app');


