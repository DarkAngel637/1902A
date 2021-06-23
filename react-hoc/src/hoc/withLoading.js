import React from 'react'

export default function withLoading(WrapComponent){
    return class extends WrapComponent{
        render(){
            console.log('this.iaLoading...', this.state.isLoading);
            return <div>
                {this.state.isLoading&&<div>
                    <img src="http://h5.chelun.com/2017/official/img/loading.gif" alt="" />
                </div>}
                {super.render()}
            </div>
        }
    }
}