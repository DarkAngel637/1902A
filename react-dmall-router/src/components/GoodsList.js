import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './GoodsList.css'
import CartContext from '../context/cartContext'


class GoodsList extends Component {
    // 跳转详情
    goDetail(id) {
        this.props.history.push(`/detail/${id}`)
    }

    render() {
        return (
            // 通过context的consumer拿到list属性和changeNum方法
            <CartContext.Consumer>{
                value => {
                    return <ul className="goodsIndex">{this.props.list.map(item => {
                        return <li key={item.id} onClick={() => this.goDetail(item.id)}>
                            <img src={item.image} alt="" />
                            <div className="goodsChildren">
                                <p>{item.name}</p>
                                <p>{item.tag}</p>
                                <div>
                                    <span>¥{item.price}</span>
                                    <div>
                                        <span onClick={(e) =>{
                                            e.stopPropagation()
                                            value.changeNum(item.id, '+')
                                        }}>+</span>
                                        {item.num>0 && <span>{item.num}</span>}
                                        {item.num>0 && <span onClick={(e) =>{
                                            e.stopPropagation()
                                            value.changeNum(item.id, '+-')
                                        }}>-</span>}
                                    </div>
                                </div>
                            </div>
                        </li>
                    })}</ul>
                }}
            </CartContext.Consumer>
        )
    }
}

export default withRouter(GoodsList)