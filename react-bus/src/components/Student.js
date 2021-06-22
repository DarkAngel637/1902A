import React, { Component } from 'react'
import Bus from '../utils/Bus'

export default class Student extends Component {
    state = {
        students: ['景超','王帅达','孟枭程','黄云望','杜晨阳','邱小月','杨延科','安泽浩','申天放','石岩'].map(item=>{
            return {
                name: item,
                checked: false
            }
        })
    }

    componentDidMount(){
        // 监听学生添加到小组里面，从左边学生列表中删除
        Bus.on('deleteStudent', res=>{
            console.log('res...', res);
            let students = [...this.state.students];
            res.forEach(item=>{
                let index = students.findIndex(value=>value.name === item);
                students.splice(index, 1);
            })
            this.setState({
                students
            })
        })
    }

    // 选中和取消选中功能
    changeState(name){
        let students = [...this.state.students];
        let index = students.findIndex(item=>item.name === name);
        students[index].checked = !students[index].checked;
        this.setState({
            students
        }, ()=>{
            Bus.emit('changeState', this.state.students.filter(item=>item.checked));
        })
    }

    render() {
        return (
            <div>
                <p></p>
                <ul>{this.state.students.map(item=>{
                    return <li key={item.name}>
                        <input type="checkbox" checked={item.checked} onChange={()=>this.changeState(item.name)}/>
                        <span>{item.name}</span>
                    </li>
                })}</ul>
            </div>
        )
    }
}
