// 一级路由
import Main from '../pages/Main'
import Login from '../pages/Login'
import Detail from '../pages/Detail'

// 二级路由
import Home from '../pages/main/Home'
import Classify from '../pages/main/Classify'
import Cart from '../pages/main/Cart'
import My from '../pages/main/My'

 const config = {
    routes: [{
        path: '/main',
        component: Main,
        children: [{
            path: '/main/home',
            component: Home
        }, {
            path: '/main/classify',
            component: Classify
        }, {
            path: '/main/cart',
            component: Cart
        }, {
            path: '/main/my',
            component: My
        }, {
            from: '/main',
            to: '/main/home'
        }]
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/detail/:id?',
        component: Detail
    }, {
        to: '/main'
    }]
}

export default config;