import React, { Component } from 'react'
import axios from 'axios'

export default class Car extends Component {

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

            console.log('letterList...', letterList, brandList);
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
