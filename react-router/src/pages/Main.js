import React, { Component } from 'react'
import {Route, Switch, Redirect, Link, NavLink} from 'react-router-dom'
// 引入路由对应的组件
import Cart from './main/Cart'
import Classify from './main/Classify'
import Home from './main/Home'
import My from './main/My'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/main/home" component={Home}/>
                    <Route path="/main/classify" component={Classify}/>
                    <Route path="/main/cart" component={Cart}/>
                    <Route path="/main/my" component={My}/>
                    <Redirect to="/main/home" />
                </Switch>
                <footer>
                    <NavLink to="/main/home">配送到家</NavLink>
                    <NavLink to="/main/classify">分类</NavLink>
                    <NavLink to="/main/cart">购物车</NavLink>
                    <NavLink to="/main/my">我的</NavLink>
                </footer>
            </div>
        )
    }
}
