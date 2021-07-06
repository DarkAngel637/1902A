import React, { Component } from 'react'
import FriendList from '../components/FriendList'
import MessageTip from '../components/MessageTip'


class List extends Component {
    render() {
        return (
            <div>
                <FriendList />
                <MessageTip />
            </div>
        )
    }
}

export default List
