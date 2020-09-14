import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import PaperLondon from './views/PaperLondon';
import TheCollective from './views/TheCollective';
import Thanos from './views/Thanos';
import GeneralAssembly from './views/GeneralAssembly';
import ErrorPage from './views/Error';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/paperlondon',
      name: 'paperlondon',
      component: PaperLondon,
    },
    {
      path: '/thecollective',
      name: 'thecollective',
      component: TheCollective,
    },
    {
      path: '/thanos',
      name: 'thanos',
      component: Thanos,
    },
    {
      path: '/generalassembly',
      name: 'generalassembly',
      component: GeneralAssembly,
    },
    {
      path: '*',
      name: '404',
      component: ErrorPage,
    },
  ],
});

