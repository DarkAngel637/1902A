import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Dialog.css'
// 引入配置路由和路由组件
import RouterView from '../router/RouterView'

export default class Dialog extends Component {
    click(e){
        if (e.target === e.currentTarget){
            this.props.closeDialog();
        }
    }

    render() {
        let {curBrandId} = this.props;
        return (
            <div className="dialog" onClick={e=>this.click(e)}>
                <div>
                    <header>
                        <NavLink to={`/main/car/sale/${curBrandId}`}>在售</NavLink>
                        <NavLink to={`/main/car/all/${curBrandId}`}>全部</NavLink>
                    </header>
                    <RouterView routes={this.props.routes}></RouterView>
                </div>
            </div>
        )
    }
}
