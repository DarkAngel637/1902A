import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import FriendList from '../components/FriendList'

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
export default connect(null, mapDispatchToProps)(List)