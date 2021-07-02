import React, { Component } from 'react'
import store from '../store'

export default class Num extends Component {
    render() {
        //1. 从store中拿状态的唯一方法，getState
        console.log('store state...', store.getState());
        let state = store.getState();
        return (
            <div>
                <span>当前数字：{state.num.num}</span>
            </div>
        )
    }
}
