import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PullToRefresh, SwipeAction } from 'antd-mobile';
import {NavLink} from 'react-router-dom'

class FriendList extends Component {
    state = {
        down: false,
        height: document.documentElement.clientHeight,
        refreshing: false
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
            <PullToRefresh
                damping={60}
                ref={el => this.ptr = el}
                style={{
                    height: this.state.height,
                    overflow: 'auto',
                }}
                indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                direction={this.state.down ? 'down' : 'up'}
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    this.setState({ refreshing: true });
                    setTimeout(() => {
                        this.setState({ refreshing: false });
                    }, 1000);
                }}
            >{
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
            }</PullToRefresh>
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
export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
