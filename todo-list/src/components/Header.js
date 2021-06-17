import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super();

        this.changeContent = this.changeContent.bind(this);
        this.submit = this.submit.bind(this);
    }

    state = {
        content: ''
    }

    changeContent(e) {
        console.log('this...', this)
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
                    // onChange={()=>this.changeContent()}
                    onChange={this.changeContent}
                    onKeyDown={this.submit.bind}
                />
            </div>
        )
    }
}
