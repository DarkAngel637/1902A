import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Description extends Component {
    render() {
        console.log('description...', this.props)
        return (
            <div>
                详情描述页        
            </div>
        )
    }
}

export default withRouter(Description)