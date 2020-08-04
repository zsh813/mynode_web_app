//模块引入
import Vue from 'vue';
import VueRouter from 'vue-router'

// 注册，使用Vue.use()注册路由
Vue.use(VueRouter)

const home = ()=>import('@/views/Home.vue')
const find = ()=>import('@/views/Find.vue')
const cart = ()=>import('@/views/Cart.vue')
const user = ()=>import('@/views/User.vue')
const detail = ()=>import('@/views/Detail.vue')
const login = ()=>import('@/views/Login.vue')
const regist = ()=>import('@/views/Regist.vue')

const router = new VueRouter({
    // mode:"hash",
    mode:'history',
    // 定义路由匹配规则
    routes: [
        {path:'/detail/:id',component:detail},
        {path:'/regist',component:regist},
        {path:'/login',component:login},
        {path:'/home',component:home},
        {path:'/find',component:find},
        {path:'/cart',component:cart},
        {path:'/user',component:user},
        {path: '/*',redirect: '/home',},
    ],
})

export default router;