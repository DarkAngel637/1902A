import loadable from '@loadable/component'
// 一级路由
const Main = loadable(()=>import('../pages/Main'))
const Detail = loadable(()=>import('../pages/Detail'))

// 二级路由懒加载
const Home = loadable(()=>import('../pages/main/Home'))
const Topic = loadable(()=>import('../pages/main/Topic'))
const Car = loadable(()=>import('../pages/main/Car'))
const City = loadable(()=>import('../pages/main/City'))
const My = loadable(()=>import('../pages/main/My'))

// 三级路由懒加载
const Sale = loadable(()=>import('../pages/main/car/Sale'))
const SaleAll = loadable(()=>import('../pages/main/car/All'))

 const config = {
    routes: [{
        path: '/main',
        component: Main,
        children: [{
            path: '/main/home',
            component: Home
        }, {
            path: '/main/topic',
            component: Topic
        }, {
            path: '/main/car',
            component: Car,
            children: [{
                path: '/main/car/sale/:id?',
                component: Sale
            }, {
                path: '/main/car/all/:id?',
                component: SaleAll
            }]
        }, {
            path: '/main/my',
            component: My
        }, {
            path: '/main/city',
            component: City
        }, {
            from: '/main',
            to: '/main/home'
        }]
    }, {
        path: '/detail/:id?',
        component: Detail
    }, {
        to: '/main'
    }]
}

export default config;