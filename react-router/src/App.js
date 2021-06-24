import React, { Component } from 'react'
// 路由区域组件
import {Route, Switch, Redirect} from 'react-router-dom'
// 引入路由对应的组件
import Main from './pages/Main'
import Detail from './pages/Detail'

export default class App extends Component {
  render() {
    return (
      <Switch>
        {/* path表示路由路径，component对应的组件 */}
        <Route path="/detail/:id?" component={Detail}/>
        <Route path="/main" component={Main}/>
        {/* from表示重定向的来源，to表示重定向去的路由，exact表示精准匹配 */}
        <Redirect to="/main"/>
      </Switch>
    )
  }
}
