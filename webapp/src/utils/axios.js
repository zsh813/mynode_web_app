import axios from 'axios'
// 创建接口
const instance = axios.create({
    // 服务器地址
    baseURL: 'http://10.36.135.69:8080/api/v1',
    // 超时时间
    timeout: 7000,
    headers: {}
});

// 请求拦截器：请求发送出去之前，做一些验证
instance.interceptors.request.use(function (config) {
    // console.log('请求拦截器',config);
    config.headers.Authorization = localStorage.getItem('token') || '';
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截器：在响应之前，先进行数据剧过滤
instance.interceptors.response.use(function (response) {
    if (response.status === 200) {
        if (response.data && response.data.msg) {
            return response.data.data
        } else {
            alert('网络异常，请求稍后再试')
        }
    }
}, function (error) {
    return Promise.reject(error);
});


export default instance;