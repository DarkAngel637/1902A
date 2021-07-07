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