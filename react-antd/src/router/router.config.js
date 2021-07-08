import loadable from '@loadable/component'

// 一级路由
import Main from '../pages/Main'
import Login from '../pages/Login'

// 二级路由
// import Home from '../pages/main/Home'
// import Topic from '../pages/main/Topic'
// import Car from '../pages/main/Car'
// import City from '../pages/main/City'
// import My from '../pages/main/My'

// 二级路由懒加载
const Table = loadable(()=>import('../pages/main/Table'))
const Tree = loadable(()=>import('../pages/main/Tree'))
const Bar = loadable(()=>import('../pages/main/Bar'))
const Candle = loadable(()=>import('../pages/main/Candle'))



// const Topic = ()=>import('../pages/main/Topic')
// const Car = ()=>import('../pages/main/Car')
// const City = ()=>import('../pages/main/City')
// const My = ()=>import('../pages/main/My')

// 三级路由懒加载
// const Sale = ()=>import('../pages/main/car/Sale')
// const SaleAll = ()=>import('../pages/main/car/All')

 const config = {
    routes: [{
        path: '/main',
        component: Main,
        children: [{
            path: '/main/table',
            component: Table
        }, {
            path: '/main/tree',
            component: Tree
        }, {
            path: '/main/bar',
            component: Bar
        }, {
            path: '/main/candle',
            component: Candle
        }, {
            from: '/main',
            to: '/main/table'
        }]
    }, {
        path: '/login',
        component: Login
    }, {
        to: '/main'
    }]
}

export default config;