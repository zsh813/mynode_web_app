//模块引入
import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册，使用Vue.use()注册路由
Vue.use(VueRouter)

import todolist from './views/todolist.vue'

const router = new VueRouter({
    // mode:"hash",
    // 定义路由匹配规则
    routes: [
        {path:'/todo',component:todolist}
    ],
})

export default router;