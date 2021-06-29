import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Detail from './pages/Detail'
import Main from './pages/Main'
import Login from './pages/Login'


export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/detail/:id?" component={Detail} />
        <Route path="/main" component={Main} />
        <Route path="/login" component={Login} />
        <Redirect to="/main" />
      </Switch>
    )
  }
}
