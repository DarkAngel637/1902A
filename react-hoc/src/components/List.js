import React, { Component } from 'react'
// 引入高阶组件
import withUrl from '../hoc/withUrl'

class List extends Component {
    render() {
        return (
            <div>
                列表组件
                <p>{JSON.stringify(this.props)}</p>
            </div>
        )
    }
}

export default withUrl(List);