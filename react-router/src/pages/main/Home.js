import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    state = {
        list: [1,2,3,4,5,6,7,8,9,10]
    }

    render() {
        return (
            <div>
                <p>首页</p>
                {this.state.list.map(item=>{
                    // 路由跳转的replace表示替换
                    // 路由传参一：通过地址栏传参,刷新后不会丢失
                    // 路由传参二：通过to里面的state属性，可以携带复杂的state，但是在接收方刷新就丢失数据了
                    return <Link key={item} to={{pathname: `/detail/${item}?id=1000`, state: {name: '苹果',desc: '', price: 100}}} replace>{`链接${item}`}</Link>
                })}
            </div>
        )
    }
}
