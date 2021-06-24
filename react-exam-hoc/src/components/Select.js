import React, { Component } from 'react'

export default class Select extends Component {
    render() {
        console.log('select props...', this.props)
        return (
            <div>
                {this.props.IsRequire&&<span>*</span>}
                <label>{this.props.Label}</label>
                <select value={this.props.value || this.props.InitValue} onChange={e=>this.props.changeSex(e)}>
                    <option value={"-1"}>请选择</option>
                    <option value={"1"}>男</option>
                    <option value={"0"}>女</option>
                </select>
            </div>
        )
    }
}
