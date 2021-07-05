// import Detail from '../pages/Detail'
// import List from '../pages/List'
import loadable from "@loadable/component";

const Detail = loadable(()=>import('../pages/Detail'))
const List = loadable(()=>import('../pages/List'))

const config = {
    routes: [{
        path: '/list',
        component: List
    }, {
        path: '/detail/:id?',
        component: Detail
    }, {
        to: '/list'
    }]
}

export default config;