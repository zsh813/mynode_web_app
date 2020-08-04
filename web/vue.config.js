module.exports = {
    devServer: {
        port: '8090',//本地的地址端口号
        proxy: {
            '/api/v1':{//跨域的关键字路径
                target:'http://10.36.135.69:9999',//跨域的地址
                ws:true,
                changeOrigin:true,
            },
        }
        // publicPath: '', //给路径加公共路径（前缀），打包路径
    }
}