import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'


export default class App extends Component {
  /**
   * todoItem
   * id: +new Date
   * content: string
   * finish: boolean
   */
  state = {
    todo: []
  }

  submitTodo(content){
    this.setState({
      todo: [...this.state.todo, {id: +new Date, content, finish: false}]
    })
  }

  render() {
    return (
      <div>
        <Header submitTodo={this.submitTodo.bind(this)}></Header>
        <List title="正在进行" todoList={this.state.todo}></List>
        
        <span>Copyright © 2014 todolist.cn clear</span>
      </div>
    )
  }
}
