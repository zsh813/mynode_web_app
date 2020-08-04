# Vue+axios+element脚手架项目搭建

## 项目初始化

### 1、创建项目文件
```node
vue create vue-element-cms 
```


### 2、安装项目依赖

axios库:
```ndoe
cnpm i axios -S
```
状态管理模式 vuex:
```ndoe
cnpm i vuex -S
```
路由管理器 vue-router:
```ndoe
cnpm i vue-router -S
```
路由管理器 vue-router:
```node
cnpm i vue-router -S
```
sass
```node
cnpm i sass sass-loader -D
```
element-ui
```node
cnpm i element-ui -S
cnpm install babel-plugin-component -D
```
![image-20200723163908448](C:\Users\H\AppData\Roaming\Typora\typora-user-images\image-20200723163908448.png)

###  3、编辑配置文件

#### package.json

```json
...
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "start": "npm run serve"//加上这行，方便运行项目
  },
...
```

#### babel.config.js

```js
module.exports = {
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

#### vue.config.js

```js
module.exports = {
    devServer: {
        port: '8090',//本地的地址端口号
        // proxy: {
        //     '/jd':{//跨域的关键字路径
        //         target:'http://10.36.135.29:9999',//跨域的地址
        //         ws:true,
        //         changeOrigin:true,
        //     },
        // }
        // publicPath: '', //给路径加公共路径（前缀），打包路径
    }
}
```

#### axios.js

(放在src包中的utils文件夹中)

```js
import axios from 'axios'
// 创建接口
const instance = axios.create({
    // 服务器地址
    baseURL: 'http://localhost:8090',//本地服务器地址
    // 超时时间
    timeout: 7000,
    headers: {}
});

// 请求拦截器：请求发送出去之前，做一些验证
instance.interceptors.request.use(function (config) {
    // console.log('请求拦截器',config);
    // 用户鉴权(token)
    config.headers.Authorization = localStorage.getItem('token') || '';
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截器：在响应之前，先进行数据剧过滤
instance.interceptors.response.use(function (response) {
    if (response.status === 200) {
        if (response.data && response.data.msg) {
            return response.data.data//筛选出主要数据
        } else {
            alert('网络异常，请求稍后再试')
        }
    }
}, function (error) {
    return Promise.reject(error);
});


export default instance;
```

### 4、项目目录搭建（src）

![image-20200723183638860](C:\Users\H\AppData\Roaming\Typora\typora-user-images\image-20200723183638860.png)

#### 根文件

##### router.js

```js
//导入vue、vue-router包
import Vue from 'vue'
import Router from 'vue-router'
//注册vue-router
Vue.use(Router)

//获取组件文件（懒加载）
const home = ()=>import('@/views/Home.vue')

// 定义路由匹配规则
const router = new Router({
    // mode:'hash',
    mode:'history',
    routes:[
        {path:'/home',component:home},
    ]
})

// 抛出
export default router
```

##### main.js

```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入第三方文件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/'
import router from './router'

Vue.use(ElementUI);

// 挂载文件
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


```

##### App.vue

```vue
<template>
  <div id="app">
    <!-- 全局布局 -->

    <!-- 展示组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'App',
  components: {
    // 组件
  }
}
</script>

<style>
/* 全局样式 */
</style>


```



#### 项目文件

