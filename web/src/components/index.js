const addGoods = ()=>import('@/components/addGoods.vue')
const addCates = ()=>import('@/components/addCates.vue')
const goods = ()=>import('@/components/goods.vue')

export default [
    {
        id: "1",
        text: '商品管理',
        icon: 'el-icon-menu',
        children: [
            { id: "11", text: '添加商品', path: '/index/addGoods', component: addGoods, icon: 'el-icon-s-goods' },
            { id: "12", text: '添加类型', path: '/index/addCates', component: addCates, icon: 'el-icon-share' },
            { id: "13", text: '商品列表', path: '/index/goods', component: goods, icon: 'el-icon-share' }
        ]
    },
    // {
    //     id: 2,
    //     text: '商品列表',
    //     icon: 'el-icon-platform-eleme',
    //     children: [
    //         { id: 21, text: '首页管理', path: '/home', component: '', icon: 'el-icon-s-tools'}
    //     ]
    // }
]