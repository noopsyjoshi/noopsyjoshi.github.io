import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Splitting from 'splitting';

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
