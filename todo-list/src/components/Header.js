import React, { Component } from 'react'

export default class Header extends Component {
    state = {
        content: ''
    }

    changeContent(e) {
        this.setState({
            content: e.target.value
        })
    }

    submit(e) {
        if (e.keyCode === 13){
            if (this.state.content){
                this.props.submitTodo(this.state.content);
                this.setState({
                    content: ''
                })
            }
        }
    }

    render() {
        return (
            <div>
                <span>ToDoList</span>
                <input 
                    value={this.state.content} 
                    onChange={this.changeContent.bind(this)}
                    onKeyDown={this.submit.bind(this)}
                />
            </div>
        )
    }
}
