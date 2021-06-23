import React, { Component } from 'react'
// 引入组件
import Top from './components/Top'
import Bottom from './components/Bottom'
import Input from './components/Input'
// 引入高阶组件
import controlItem from './hoc/controlItem'

export default class App extends Component {
  render() {
    return (
      <div>
        <Top>
          {controlItem({
            InitValue: '1902A',// 默认值
            placeHolder: '请输入姓名',  // 水印字
            Label: '姓名',  //  表单项文本
            IsRequire: true,  // 是否必填
            Rule: /^\D[0-9a-zA-Z_]{5,15}$/, //校验规则 
          })(Input)}
        </Top>

        <Bottom />
      </div>
    )
  }
}
