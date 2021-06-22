import React, { Component } from 'react'
import GoodsContext from '../context/goodsContext'

export default class Goods extends Component {
    render() {
        return (
            <div>
                <GoodsContext.Consumer>{
                    value=>value.goods.map(item=>{
                        return <li key={item.id}>
                            <span>{item.id}</span>
                            <span>{item.name}</span>
                            <button onClick={()=>value.deleteGoods(item.id)}>删除</button>
                        </li>
                    })    
                }</GoodsContext.Consumer>
            </div>
        )
    }
}
