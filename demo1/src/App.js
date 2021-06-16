import './App.css';
import React from 'react';

class App extends React.Component {
    state = {
        time: 60,
        isGetCode: false
    }

    getCode(){
        if (this.state.isGetCode){
            return;
        }
        this.setState({
            isGetCode: true
        }, ()=>{
            let inter = setInterval(()=>{
                if (this.state.time === 1){
                    clearInterval(inter)
                    // 重新获取验证码
                    this.setState({
                        isGetCode: false
                    })
                }
                this.setState({
                    time: this.state.time-1
                })
            }, 100);
        })
    }

    render() {
        return <div>
            <input placeholder="请输入验证码"></input>
            <span className={this.state.isGetCode?'disable': 'active'} onClick={this.getCode.bind(this)}>{this.state.isGetCode?`${this.state.time}s`:'获取验证码'}</span>
        </div>
    }
}

export default App;
