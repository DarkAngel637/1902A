import React, { Component } from 'react'
// import store from '../store'
import {connect} from 'react-redux'

class Action extends Component {
    render() {
        // //2. 发送action的唯一方法
        // let {dispatch} = store;
        return (
            <div>
                <button onClick={()=>this.props.addNum()}>+</button>
                <button onClick={()=>this.props.subNum()}>-</button>
            </div>
        )
    }
}

// connect作为高阶组件，帮助我们注入redux的store，有四个参数
// 1. mapStateToProps
// 2. mapDispatchToProps
const mapDispatchToProps = dispatch=>{
    return {
        addNum: (payload)=>{
            dispatch({
                type: 'ADD_NUM',
                payload
            })
        },
        subNum: (payload)=>{
            dispatch({
                type: 'SUB_NUM',
                payload
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Action)