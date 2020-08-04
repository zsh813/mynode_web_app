import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false

import router from '@/router';
import http  from "@/utils/api";
Vue.prototype.$http = http;
// import store from '@/store/'

new Vue({
  // store,
  router,
  render: h => h(App),
}).$mount('#app');
