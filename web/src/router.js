//导入vue、vue-router包
import Vue from 'vue'
import Router from 'vue-router'
//注册vue-router
Vue.use(Router)

//获取组件文件（懒加载）
const regist = ()=>import('@/views/user/Regist.vue')
const login = ()=>import('@/views/user/Login.vue')
const index = ()=>import('@/views/manage/index.vue')
import routes from '@/components/'
// 隐藏地址错误
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const arr = []
// 一层循环
routes.map(ele=>{
    if(ele.children) {
        // 二层循环
        ele.children.map(ele=>{
            arr.push({path: ele.path, component: ele.component})
        })
    }
})

// 定义路由匹配规则
const router = new Router({
    // mode:'hash',
    mode:'history',
    routes:[
        {
            path:'/index',
            component:index,
            children:[
                ...arr,
                {path:'/index',redirect:'/index/addGoods'}
            ]
        },
        {path:'/regist',component:regist},
        {path:'/login',component:login},
        {path:'/*',redirect:'/login'}//重定向
    ]
})

// 抛出
export default router