import React, { Component } from 'react'
import './Letter.css'

export default class Letter extends Component {
    render() {
        return (
            <ul className="letter">{
                this.props.letterList.map(item=>{
                    return <li key={item} onClick={()=>this.props.changCurLetter(item)}>{item}</li>
                })
            }</ul>
        )
    }
}
