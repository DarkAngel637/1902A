import React, { Component } from 'react'
import {connect} from 'react-redux'

class Num extends Component {
    render() {
        // //1. 从store中拿状态的唯一方法，getState
        // console.log('store state...', store.getState());
        // let state = store.getState();

        console.log('props...', this.props)

        return (
            <div>
                <span>当前数字：{this.props.num}</span>
            </div>
        )
    }
}

// connect作为高阶组件，帮助我们注入redux的store，有四个参数
// 1. mapStateToProps
const mapStateToProps = (state)=>{
    return {
        num: state.num.num
    }
}
export default connect(mapStateToProps)(Num)