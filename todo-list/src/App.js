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

  // 切换item的状态
  changeTodoFinish(checked, id){
    let todo = [...this.state.todo]
    let index = todo.findIndex(item=>item.id === id);
    todo[index].finish = checked;
    this.setState({
      todo
    }, ()=>{
      console.log('todo...', this.state.todo)
    })
  }
  
  // 删除item
  deleteTodo(id){
    let todo = [...this.state.todo]
    let index = todo.findIndex(item=>item.id === id);
    todo.splice(index, 1);
    this.setState({
      todo
    })
  }

  // 获取未完成列表
  get unfinishList(){
    return this.state.todo.filter(item=>item.finish===false)
  }

  // 获取完成列表
  get finishList(){
    return this.state.todo.filter(item=>item.finish===true)
  }

  render() {
    return (
      <div>
        <Header submitTodo={this.submitTodo.bind(this)}></Header>
        <List 
          title="正在进行" 
          todoList={this.unfinishList}
          changeTodoFinish={this.changeTodoFinish.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        ></List>

        <List 
          title="已经完成" 
          todoList={this.finishList}
          changeTodoFinish={this.changeTodoFinish.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        ></List>
        
        <span>Copyright © 2014 todolist.cn clear</span>
      </div>
    )
  }
}
