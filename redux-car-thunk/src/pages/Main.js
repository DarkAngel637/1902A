import React, { Component } from 'react'
import Footer from '../components/Footer'
// 引入配置路由和路由组件
import RouterView from '../router/RouterView'

const footerJSON = [{
    title: '首页',
    path: '/main/home'
},{
    title: '论坛',
    path: '/main/topic'
},{
    title: '选车',
    path: '/main/car'
},{
    title: '北京',
    path: '/main/city'
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
