import React, { Component } from 'react'
import axios from 'axios'
import Category from '../../components/Category'
import GoodsList  from '../../components/GoodsList'

export default class Classify extends Component {
    constructor(props) {
        super(props);
        this.changeCategoryIndex = this.changeCategoryIndex.bind(this);
    }

    state = {
        list: [],
        categories: [],
        categoryIndex: 0
    }

    async componentDidMount(){
        let result = await axios('/goods/list');
        console.log('result...', result);
        let categories = [...new Set(result.data.map(item=>item.category))];
        this.setState({ 
            categories,
            list: result.data
        })
    }

    get curList(){
        return this.state.list.filter(item=>item.category === this.state.categories[this.state.categoryIndex]);
    }

    changeCategoryIndex(index){
        this.setState({ 
            categoryIndex: index
        })
    }

    render() {
        return (
            <div style={{display: 'flex',height: '100%',paddingBottom: '50px',boxSizing: 'border-box'}}>
                <Category 
                    categories={this.state.categories} 
                    categoryIndex={this.state.categoryIndex}
                    changeCategoryIndex={this.changeCategoryIndex}
                />
                <GoodsList list={this.curList}/>
            </div>
        )
    }
}
