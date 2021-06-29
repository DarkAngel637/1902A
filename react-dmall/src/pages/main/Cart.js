import React, { Component } from 'react'
import withLogin from '../../hoc/withLogin'
import CartContext from '../../context/cartContext'

class Cart extends Component {
    render() {
        return (
            <CartContext.Consumer>{
                value => {
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
                                <button>+</button>
                                <span>{item.num}</span>
                                <button>+</button>
                            </div>
                        </ul>)}
                        <section>
                            <span>总量：</span> 
                            <span>总价：</span>
                            <button>立即支付</button>
                        </section>
                    </div>
                }}</CartContext.Consumer>
        )
    }
}

export default withLogin(Cart);