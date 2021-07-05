import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import FriendList from '../components/FriendList'
import MessageTip from '../components/MessageTip'

// 引入高阶组件WithScroll
// import WithScroll from '../hoc/withScroll'

class List extends Component {
    async componentDidMount(){
        let result = await axios.get('/userlist');
        console.log('result...', result);
        this.props.getFriendList(result.data);
    }

    render() {
        return (
            <div>
                <FriendList />
                <MessageTip />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getFriendList: payload=>{
            dispatch({
                type: 'GET_FRIEND_LIST',
                payload
            })
        }
    }
}
const scorllEvent = page=>{

}
export default connect(null, mapDispatchToProps)(List)
// export default connect(null, mapDispatchToProps)(WithScroll(scorllEvent)(List))
