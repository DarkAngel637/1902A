import React, { Component } from 'react'
import Description from '../components/Description'

export default class Detail extends Component {
    render() {
        // 路由组件会在props中注入history,location和match
        console.log('props...', this.props);

        return (
            <div>
                详情页
                <Description />
            </div>
        )
    }
}
