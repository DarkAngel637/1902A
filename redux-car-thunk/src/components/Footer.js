import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer>{
                this.props.list.map(item=>{
                    return <NavLink to={item.path} key={item.path}>{item.title}</NavLink>
                })}</footer>
        )
    }
}
