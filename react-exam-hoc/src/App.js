import React, { Component } from 'react'
// 引入组件
import Top from './components/Top'
import Bottom from './components/Bottom'
// 引入表单组件
import Input from './components/Input'
import Select from './components/Select'
import TextArea from './components/TextArea'
// 引入高阶组件
import controlItem from './hoc/controlItem'

const WrapInput = controlItem({
  InitValue: '1902A',// 默认值
  placeHolder: '请输入姓名',  // 水印字
  Label: '姓名',  //  表单项文本
  IsRequire: true,  // 是否必填
  Rule: /^\D[0-9a-zA-Z_]{5,15}$/, //校验规则 
})(Input);
const WrapSelect =  controlItem({
  InitValue: "-1",
  Label: '性别',  
})(Select);
const WrapTextArea = controlItem({
  InitValue: '',// 默认值
  placeHolder: '请输入您的个人描述',  // 水印字
  Label: '个人描述',  //  表单项文本
  IsRequire: true,  // 是否必填
  Rule: /^[\u4e00-\u9fa5\w]{50,1000}$/, //校验规则 
})(TextArea);

console.log('wrapSelect...', WrapSelect);
export default class App extends Component {
  state = {
    sex: "-1",
    form: null
  }

  changeSex(e){
    this.setState({
      sex: e.target.value
    })
  }

  constructor(props){
    super(props);

    // 创建ref访问子组件
    this.inputRef = React.createRef();
    this.selectRef = React.createRef();
    this.textareaRef = React.createRef();

    // bind This
    this.changeSex = this.changeSex.bind(this);
    this.submit = this.submit.bind(this);

  }

  submit(){
    let inputValid = this.inputRef.current.state.isValid,
        textareaValid = this.textareaRef.current.state.isValid;
    console.log('input ref...', inputValid, textareaValid);
    if (!inputValid || !textareaValid){
      let errMsg = !inputValid?'input输入的值不合法 ':'';
      errMsg += !textareaValid?'textare输入的值不合法': '';
      console.log(`表单校验失败...${errMsg}`)
      return;
    }
    this.setState({
      form: {
        input: this.inputRef.current.state.value,
        sex: this.state.sex,
        textarea: this.textareaRef.current.state.value
      }
    })

  }

  render() {
    return (
      <div>
        <Top>
          <WrapInput 
            ref={this.inputRef}
          />
          <WrapSelect 
            ref={this.selectRef} 
            value={this.state.sex} 
            changeSex={this.changeSex}
          />
          <WrapTextArea 
            ref={this.textareaRef} 
            sexValid={this.state.sex !== "-1"}/>
            
          <button onClick={this.submit}>提交</button>
        </Top>

        <Bottom form={this.state.form}/>
      </div>
    )
  }
}
