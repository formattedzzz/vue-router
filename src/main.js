// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';

import router from './router';

import localsave from './lib/utils';

import './assets/css/app.css';
import './assets/css/font-awesome.css';

Vue.use(localsave);

new Vue({
  el:'#app',
  router,
  template: '<App/>',
  components: { App }
})