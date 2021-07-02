import Detail from '../pages/Detail'
import List from '../pages/List'

const config = {
    routes: [{
        path: '/list',
        component: List
    }, {
        path: '/detail',
        component: Detail
    }, {
        to: '/list'
    }]
}

export default config;