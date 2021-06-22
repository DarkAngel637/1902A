import React, { Component } from 'react'
import Bus from '../utils/Bus'

export default class Group extends Component {
    state = {
        groups: [],  // members: ['常笑', '贾世雄‘], id: 1
        selectedStudent: [] // 缓存左边选中的列表
    }

    componentDidMount(){
        // 监听选中到学生，放到选中列表中
        Bus.on('changeState', res=>{
            this.setState({ 
                selectedStudent: res.map(item=>item.name)
            })
        })
    }

    createGroup(){
        this.setState({ 
            groups: [...this.state.groups, { 
                id: +new Date(),
                members: []
            }]
        })
    }

    deleteGroup(id){
        let groups = [...this.state.groups];
        let index = this.state.groups.findIndex(item => item.id === id)
        groups.splice(index, 1);
        this.setState({ 
            groups
        })
    }

    // 把选中到学生添加到小组中
    addMember(id){
        let groups = [...this.state.groups];
        let index = this.state.groups.findIndex(item => item.id === id)
        groups[index].members.push(...this.state.selectedStudent);
        console.log('groups...', groups, index, this.state.selectedStudent);
        this.setState({ 
            groups
        }, ()=>{
            Bus.emit('deleteStudent', this.state.selectedStudent);
        })
    }

    render() {
        return (
            <div>
                <p>当前已{this.state.groups.length}分个小组</p>
                <button onClick={()=>this.createGroup()}>创建小组</button>
                <ul>{
                    this.state.groups.map((item, index)=>{
                        return <li key={item.id}>
                            <p>组{index+1}</p>
                            <p>
                                <span onClick={()=>this.addMember(item.id)}>+</span>
                                <span onClick={()=>this.deleteGroup(item.id)}>删除</span>
                            </p>
                            <ul>{
                                item.members.map((value, key)=>{
                                    return <span key={key}>{value}</span>
                                })
                            }</ul>
                        </li>
                    })    
                }</ul>
            </div>
        )
    }
}
