import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './GoodsList.css'

class GoodsList extends Component {
    // 跳转详情
    goDetail(id){
        this.props.history.push(`/detail/${id}`)
    }

    // 添加到购物车
    addCart(e, id){
        e.stopPropagation()
    }

    render() {
        return (
            <ul className="goodsIndex">{this.props.list.map(item=>{
                return <li key={item.id} onClick={()=>this.goDetail(item.id)}>
                    <img src={item.image} alt="" />
                    <div className="goodsChildren">
                        <p>{item.name}</p>
                        <p>{item.tag}</p>
                        <p>
                            <span>¥{item.price}</span>
                            <span onClick={(e)=>this.addCart(e, item.id)}>+</span>
                        </p>
                    </div>
                </li>
            })}</ul>
        )
    }
}

export default withRouter(GoodsList)