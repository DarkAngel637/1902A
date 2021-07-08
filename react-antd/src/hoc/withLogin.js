import React from 'react'
import {Redirect} from 'react-router-dom'

export default function withLogin(WrapComponent){
    return class extends React.Component{
        render(){
            let isLogin = window.localStorage.getItem('isLogin');
            if (!isLogin){
                return <Redirect to="/login"></Redirect>
            }else{
                return <WrapComponent {...this.props}></WrapComponent>
            }
        }
    }
}