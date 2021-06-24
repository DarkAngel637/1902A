import React, { Component } from 'react'

export default class Bottom extends Component {
    render() {
        if (!this.props.form){
            return <p>提交后显示区域</p>
        }

        return (
            <div>{
                Object.keys(this.props.form).map(item=>{
                    return <p key={item}>
                        <span>{item}的值是：</span>    
                        <span>{this.props.form[item]}</span>
                    </p>
                })    
            }</div>
        )
    }
}
