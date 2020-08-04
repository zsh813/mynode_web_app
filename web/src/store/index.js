import Vue from 'vue'
import Vuex from 'vuex'
// 注册vuex
Vue.use(Vuex)
// 引入moudle文件
// import data from './modules/data.js'

const store = new Vuex.Store({ 
  modules:{
    // data:data //模块名:引入的文件名
  }
})

// 抛出
export default store;