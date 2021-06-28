import React, { Component } from 'react'
import './Category.css'

export default class Category extends Component {
    render() {
        return (
            <ul className="category">{this.props.categories.map((item, index)=>{
                return <li onClick={()=>this.props.changeCategoryIndex(index)} key={item} className={index===this.props.categoryIndex?'active':''}>{item}</li>
            })}</ul>
        )
    }
}
