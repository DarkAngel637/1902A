import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <ul>{
                    this.props.todoList.map(item=>{
                        return <li key={item.id}>
                            <input type="checkbox" checked={item.checked} />
                            <span>{item.content}</span>
                            <button>删除</button>
                        </li>
                    })    
                }</ul>
            </div>
        )
    }
}
