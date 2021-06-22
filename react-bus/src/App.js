import React, { Component } from 'react'
// 引入组件
import Group from './components/Group'
import Student from './components/Student'

export default class App extends Component {
  render() {
    return (
      <div>
        <Student />
        <Group />
      </div>
    )
  }
}
