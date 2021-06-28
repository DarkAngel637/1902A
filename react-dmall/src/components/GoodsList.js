import React, { Component } from 'react'

export default class GoodsList extends Component {
    render() {
        return (
            <ul>{this.props.list.map(item=>{
                return <li key={item.id}>
                    <img src={item.image} alt="" />
                    <div>
                        <p>{item.name}</p>
                        <p>{item.tag}</p>
                        <p>
                            <span>¥{item.price}</span>
                            <span>+</span>
                        </p>
                    </div>
                </li>
            })}</ul>
        )
    }
}
