import React, { Component } from 'react'
// 引入路由表
import config from './router/router.config'
import RouterView from './router/RouterView'


export default class App extends Component {
  render() {
    return <RouterView routes={config.routes}></RouterView>
  }
}
