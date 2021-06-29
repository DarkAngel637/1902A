import React, { Component } from 'react'
import Category from '../../components/Category'
import GoodsList from '../../components/GoodsList'
import CartContext from '../../context/cartContext'


export default class Classify extends Component {
    constructor(props) {
        super(props);
        this.changeCategoryIndex = this.changeCategoryIndex.bind(this);
    }

    state = {
        categories: [],
        categoryIndex: 0
    }

    changeCategoryIndex(index) {
        this.setState({
            categoryIndex: index
        })
    }

    render() {
        console.log('props...', this.props)
        return (
            // 通过context的consumer拿到list属性和changeNum方法
            <CartContext.Consumer>{
            value => {
                let categories = [...new Set(value.list.map(item=>item.category))];
                let curList = value.list.filter(item => item.category === categories[this.state.categoryIndex]);
                return <div style={{ display: 'flex', height: '100%', paddingBottom: '50px', boxSizing: 'border-box' }}>
                    <Category
                        categories={categories}
                        categoryIndex={this.state.categoryIndex}
                        changeCategoryIndex={this.changeCategoryIndex}
                    />
                    <GoodsList list={curList} />
                </div>
            }}</CartContext.Consumer>
        )
    }
}
