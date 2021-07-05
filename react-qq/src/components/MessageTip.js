import React, { Component } from 'react'
import { connect } from 'react-redux'


class MessageTip extends Component {
    render() {
        let messageTotal = this.props.friendList.reduce((total, item)=>{
            if (item.isRead){
                return total;
            }else{
                return total +=  item.unRead
            }
        }, 0);
        return (
            <div className="message-tip">
                {messageTotal}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        friendList: state.friendList
    }
}
export default connect(mapStateToProps)(MessageTip)