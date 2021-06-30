import React, { Component } from 'react'
import Footer from '../components/Footer'
// 引入配置路由和路由组件
import RouterView from '../router/RouterView'

const footerJSON = [{
    title: '配送到家',
    path: '/main/home'
},{
    title: '分类',
    path: '/main/classify'
},{
    title: '购物车',
    path: '/main/cart'
},{
    title: '我的',
    path: '/main/my'
}]
export default class Main extends Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                <RouterView routes={this.props.routes}></RouterView>
                <Footer list={footerJSON}/>
            </div>
        )
    }
}
