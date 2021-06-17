// import React, { Component } from 'react'

// export default class List extends Component {

//     changeState(e, id){
//         console.log('e....', e , id);
//         this.props.changeTodoFinish(e.target.checked, id);
//     }

//     deleteTodo(id){
//         this.props.deleteTodo(id);
//     }

//     render() {
//         return (
//             <div>
//                 <p>
//                     <span>{this.props.title}</span>
//                     <span>{this.props.todoList.length}</span>
//                 </p>
//                 <ul>{
//                     this.props.todoList.map(item=>{
//                         return <li key={item.id}>
//                             <input 
//                                 type="checkbox" 
//                                 checked={item.finish} 
//                                 onChange={e=>this.changeState(e, item.id)}
//                             />
//                             <span>{item.content}</span>
//                             <button onClick={()=>this.deleteTodo(item.id)}>删除</button>
//                         </li>
//                     })    
//                 }</ul>
//             </div>
//         )
//     }
// }

// 视图组件 - 函数式组件

export default function List(props){
    function changeState(e, id){
        console.log('e....', e , id);
        props.changeTodoFinish(e.target.checked, id);
    }

    function deleteTodo(id){
        props.deleteTodo(id);
    }

    return (
        <div>
            <p>
                <span>{props.title}</span>
                <span>{props.todoList.length}</span>
            </p>
            <ul>{
                props.todoList.map(item=>{
                    return <li key={item.id}>
                        <input 
                            type="checkbox" 
                            checked={item.finish} 
                            onChange={e=>changeState(e, item.id)}
                        />
                        <span>{item.content}</span>
                        <button onClick={()=>deleteTodo(item.id)}>删除</button>
                    </li>
                })    
            }</ul>
        </div>
    )
}
