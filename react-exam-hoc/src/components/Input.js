import React, { Component } from 'react'

export default class Input extends Component {
    state = {
        value: this.props.InitValue,
        isValid: this.props.Rule.test(this.props.InitValue)
    }

    onChange(e){
        this.setState({ 
            value: e.target.value
        }, ()=>{
            if (this.props.Rule){
                console.log('valid...', this.props.Rule.test(this.state.value))
                if (this.props.Rule.test(this.state.value)){
                    this.setState({
                        isValid: true
                    })
                }else{
                    this.setState({
                        isValid: false
                    })
                }
            }
        })
    }

    render() {
        return (
            <div>
                {this.props.IsRequire&&<span>*</span>}
                <label>{this.props.Label}</label>
                <input placeholder={this.props.placeHolder} value={this.state.value} onChange={e=>this.onChange(e)}/>
                {!this.state.isValid&&<span>输入内容不合法</span>}
            </div>
        )
    }
}
