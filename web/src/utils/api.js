// 引入axios.js文件
import axios from './axios'

//定义接口文件
// 登录
export function login(data){
    return axios({
        url:'/users/login', 
        method:'post', 
        data:data, 
    })
}
// 注册
export function regist(data){
    return axios({
        url:'/users/regist', 
        method:'post', 
        data:data,  
    })
}
// 商品查询
export function getGoods(params) {
    return axios({
        url:'/goods/getGoods',  
        method:'post', 
        data:params,  
    })
}
// 添加商品
export function addGoods(data) {
    return axios({
        url:'/goods/addGoods',
        method:'post',
        data:data
    })
}
// 类型查找
export function getCates(params) {
    return axios({
        url:'/cates/all',   
        method:'get',  
        params:params,  
    })
}
// 类型添加
export function addCates(data) {
    return axios({
        url:'/cates/addCates', 
        method:'post', 
        data:data, 
    })
}
// 商品名查找

export function nameGetGoods(data) {
    return axios({
        url:'/goods/nameGetGoods', 
        method:'post', 
        data:data,  
    })
}
export function goodsAll(data) {
    return axios({
        url:'/goods/all', 
        method:'post', 
        data,  
    })
}
export function goodsDelet(data) {
    return axios({
        url:'/goods/deletGoods', 
        method:'post', 
        data,  
    })
}

export function catesDelet(data) {
    return axios({
        url:'/cates/deletCate', 
        method:'post', 
        data,  
    })
}

//抛出接口文件
export default {
    login,
    regist,
    getGoods,
    addGoods,
    getCates,
    addCates,
    nameGetGoods,
    goodsAll,
    goodsDelet,
    catesDelet
}
