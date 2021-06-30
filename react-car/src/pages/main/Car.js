import React, { Component } from 'react'
import axios from 'axios'
import Letter from '../../components/Letter'
import Brand from '../../components/Brand'

export default class Car extends Component {

    constructor(props) {
        super(props)
        this.changCurLetter = this.changCurLetter.bind(this);
    }

    state = {
        letterList: [],
        brandList: [],
        curLetter: ''
    }

    async componentDidMount(){
        let result = await axios.get('http://baojia.chelun.com/v2-car-getMasterBrandList.html?_1625034677422');
        console.log(result)
        if (result.status === 200){
            let letterList = [...new Set(result.data.data.map(item=>item.Spelling[0]))]
            let brandList = {};
            result.data.data.forEach(item=>{
                let letter = item.Spelling[0];
                if (brandList[letter]){
                    brandList[letter].push(item);
                }else{
                    brandList[letter] = [item];
                }
            })
            this.setState({
                letterList,
                curLetter: letterList[0],
                brandList
            })
        }
    }

    changCurLetter(letter){
        this.setState({
            curLetter: letter
        })
    }

    render() {
        let {letterList, brandList, curLetter} = this.state;
        return (
            <div style={{height: '100%',boxSizing: 'border-box', paddingBottom: '50px'}}>
                <Brand brandList={brandList} curLetter={curLetter}/>
                <Letter letterList={letterList} changCurLetter={this.changCurLetter}/>
            </div>
        )
    }
}
