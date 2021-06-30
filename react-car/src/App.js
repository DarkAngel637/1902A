import React, { Component } from 'react'
// 引入配置路由和路由组件
import RouterView from './router/RouterView'
import routeConfig from './router/router.config'

export default class App extends Component {
  render() {
    return (
      <RouterView routes={routeConfig.routes}></RouterView>
    )
  }
}
