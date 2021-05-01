import Vue from 'vue';
import router from './router';
import App from './App';
import store from './store';

Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
