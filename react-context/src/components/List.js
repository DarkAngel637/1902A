import React, { Component } from 'react'
import ListContext from '../context/listContext'
import Goods from './Goods'

export default class List extends Component {
    render() {
        return (
            <div>
                {/* 3. 在需要数据的地方通过consumer拿到数据 */}
                <ListContext.Consumer>
                    {value => value.list.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                </ListContext.Consumer>


                
                <Goods />
            </div>
        )
    }
}
