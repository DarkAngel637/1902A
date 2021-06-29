import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Footer from '../components/Footer'
import Home from './main/Home'
import Classify from './main/Classify'
import Cart from './main/Cart'
import My from './main/My'

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
                <Switch>
                    <Route path="/main/home" component={Home}/>
                    <Route path="/main/classify" component={Classify}/>
                    <Route path="/main/cart" component={Cart}/>
                    <Route path="/main/my" component={My}/>
                    <Redirect to="/main/home"/>
                </Switch>

                <Footer list={footerJSON}/>
            </div>
        )
    }
}
