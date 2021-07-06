import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SwipeAction } from 'antd-mobile';
import {NavLink} from 'react-router-dom'
import store from '../store'
import axios from 'axios'

// 引入高阶组件WithScroll
import WithScroll from '../hoc/withScroll'

class FriendList extends Component {
    state = {
    }

    render() {
        let newFriendList = [...this.props.friendList];
        newFriendList.sort((a, b)=>{
            if (a.isTop === b.isTop){
                return b.lastTime - a.lastTime;
            }else{
                return b.isTop - a.isTop;
            }
        })

        return (
            <div>{
                newFriendList.map(item => {
                    return <SwipeAction key={item.id} right={[
                        {
                            text: item.isTop?'取消置顶':'置顶',
                            onPress: () => this.props.changeTop(item.id),
                            style: { backgroundColor: '#ddd', color: 'white' },
                        },
                        {
                            text: item.isRead?'标为未读': '标为已读',
                            onPress: () => this.props.changeRead(item.id),
                            style: { backgroundColor: '#F4333C', color: 'white' },
                        },
                        {
                            text: '删除',
                            onPress: () => this.props.deleteFriend(item.id),
                            style: { backgroundColor: '#F4333C', color: 'white' },
                        },
                    ]}>
                        <NavLink to={`/detail/${item.id}`} className="friend" style={{background: item.isTop?'#ccc': '#fff'}}>
                            <p>
                                <span>{item.name}</span>
                                <span>{item.lastTime}</span>
                            </p>
                            {!item.isRead && <span>{item.unRead}</span>}
                        </NavLink>
                    </SwipeAction>

                })
            }</div>
        )
    }
}
const mapStateToProps = state => {
    return {
        friendList: state.friendList
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        changeRead: payload=>{
            dispatch({
                type: 'CHANGE_READ',
                payload
            })
        },
        changeTop: payload=>{
            dispatch({
                type: 'CHANGE_TOP',
                payload
            })
        },
        deleteFriend: payload=>{
            dispatch({
                type: 'DELETE_FRIEND',
                payload
            })
        }
    }
}

async function getData(page){
    let result = await axios.get(`/userlist?page=${page}`);
    let payload = [];
    if (page === 1){
        payload = result.data;
    }else{
        payload = [...store.getState().friendList, ...result.data];
    }
    store.dispatch({
        type: 'GET_FRIEND_LIST',
        payload
    })
    return payload;
}
const scorllEvent = page=>{
    return getData(page);
}

export default connect(mapStateToProps, mapDispatchToProps)(WithScroll(scorllEvent)(FriendList))
