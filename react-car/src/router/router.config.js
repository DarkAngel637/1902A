// 一级路由
import Main from '../pages/Main'
import Detail from '../pages/Detail'

// 二级路由
import Home from '../pages/main/Home'
import Topic from '../pages/main/Topic'
import Car from '../pages/main/Car'
import City from '../pages/main/City'
import My from '../pages/main/My'

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
            component: Car
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