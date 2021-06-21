import React, { Component } from 'react'
// 引入Input组件
import Input from './Input'
// 引入Button组件
import Button from './Button'
// 引入Radio组件
import Radio from './Radio'


export default class Form extends Component {
  state = {
    username: '',
    password: '',
    code: '',
    role: 'student'
  }

  // 改变状态
  changeState(e, key){
    this.setState({
      [key]: e.target.value
    })
  }

  // 改变单选框状态
  changeRole(e, role){
    if (e.target.checked){
      this.setState({
        role
      })
    }
  }

  // click事件
  click(){
    console.log('form value...', this.state);    
  }

  render() {
    return (
      <div>
        <Input value={this.state.username} onChange={e=>this.changeState(e, 'username')}></Input>
        <Input value={this.state.password} onChange={e=>this.changeState(e, 'password')} type="password"></Input>
        <Input value={this.state.code} onChange={e=>this.changeState(e, 'code')} type="number"></Input>
        <div>
          <Radio title="学生" name="role" checked={this.state.role==='student'} onChange={e=>this.changeRole(e, 'student')}></Radio>
          <Radio title="老师" name="role" checked={this.state.role==='teacher'} onChange={e=>this.changeRole(e, 'teacher')}></Radio>
        </div>
        <Button type="warning" onClick={()=>this.click()}>登陆</Button>
      </div>
    )
  }
}
