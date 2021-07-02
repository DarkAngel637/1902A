import React, { Component } from 'react'
import RouterView from './router/RouterView'
import config from './router/router.config'

export default class App extends Component {
  render() {
    return <RouterView routes={config.routes}></RouterView>
  }
}
