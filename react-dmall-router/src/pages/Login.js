import React, { Component } from 'react'
import axios from 'axios'


export default class Login extends Component {
    state = {
        username: '1902A',
        password: '1902A'
    }

    async login(){
        let {username, password} = this.state;
        if (!this.state.username || !this.state.password){
            alert('请输入正确的用户名或密码');
            return;
        }
        let result = await axios.post('/user/login', {username, password});
        console.log('result', result);
        if (result.data.token){
            window.localStorage.setItem('isLogin', result.data.token);
            console.log('props...', this.props);
            this.props.history.goBack();
        }else{
            alert(result.data.msg)
        }
    }

    render() {
        return (
            <div>
                <input placeholder="请输入您的用户名" value={this.state.username} onChange={e=>{this.setState({username: e.target.value})}}/>
                <input placeholder="请输入您的密码" type="password" value={this.state.password} onChange={e=>{this.setState({password: e.target.value})}}/>
                <button onClick={()=>this.login()}>立即登陆</button>
            </div>
        )
    }
}
