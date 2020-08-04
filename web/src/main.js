import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入第三方文件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/'
import router from './router'
import http from './utils/api'
Vue.prototype.$http = http

Vue.use(ElementUI);

// 挂载文件
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
