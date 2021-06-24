import React, { Component } from 'react'

export default class TextArea extends Component {
    state = {
        value: this.props.InitValue,
        isValid: this.props.Rule.test(this.props.InitValue),
        tip: '输入内容不合法'
    }

    onChange(e){
        if (!this.props.sexValid){
            this.setState({
                tip: '请先选择性别',
                value: ''
            })
            return;
        }
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
                        isValid: false,
                        tip: '输入内容不合法'
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
                <textarea row="10" placeholder={this.props.placeHolder} value={this.state.value} onChange={e=>this.onChange(e)}/>
                {!this.state.isValid&&<span>{this.state.tip}</span>}
            </div>
        )
    }
}
