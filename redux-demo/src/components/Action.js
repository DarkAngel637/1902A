import React, { Component } from 'react'
import store from '../store'


export default class Action extends Component {
    render() {
        //2. 发送action的唯一方法
        let {dispatch} = store;
        return (
            <div>
                <button onClick={()=>dispatch({
                    type: 'ADD_NUM'
                })}>+</button>
                <button onClick={()=>dispatch({
                    type: 'SUB_NUM'
                })}>-</button>
            </div>
        )
    }
}
