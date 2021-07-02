import React, { Component } from 'react'
import Action from './components/Action'
import Num from './components/Num'

export default class App extends Component {
  render() {
    return (
      <div>
        <Action></Action>
        <Num></Num>
      </div>
    )
  }
}
