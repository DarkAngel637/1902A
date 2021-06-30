import React, { Component } from 'react'
import withLogin from '../../hoc/withLogin'
import CartContext from '../../context/cartContext'

class Cart extends Component {
    render() {
        return (
            // 通过context的consumer拿到list属性和changeNum方法
            <CartContext.Consumer>{
            value => {
                let totalNum = value.list.reduce((total, item)=>total += item.num, 0),
                    totalPrice = value.list.reduce((total, item)=>total += item.num*item.price, 0);
                let cartList = value.list.filter(item => item.num);
                return <div>{cartList.map(item=>
                    <ul key={item.id}>
                        <img src={item.image} alt=""/>
                        <div>
                            <p>{item.name}</p>
                            <p>{item.tag}</p>
                            <p>{item.price}</p>
                        </div>
                        <div>
                            <button onClick={e=>{
                                e.stopPropagation();
                                value.changeNum(item.id, '+')
                            }}>+</button>
                            <span>{item.num}</span>
                            <button onClick={e=>{
                                e.stopPropagation();
                                value.changeNum(item.id, '-')
                            }}>-</button>
                        </div>
                    </ul>)}
                    <section>
                        <span>总量：{totalNum}</span> 
                        <span>总价：¥{totalPrice.toFixed(2)}</span>
                        <button>立即支付</button>
                    </section>
                </div>
            }}</CartContext.Consumer>
        )
    }
}

export default withLogin(Cart);