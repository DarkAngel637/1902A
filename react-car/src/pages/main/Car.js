import React, { Component } from 'react'
import axios from 'axios'
import Letter from '../../components/Letter'
import Brand from '../../components/Brand'
import Dialog from '../../components/Dialog'

export default class Car extends Component {

    constructor(props) {
        super(props)
        this.changCurLetter = this.changCurLetter.bind(this);
        this.changeCurBrand = this.changeCurBrand.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }

    state = {
        letterList: [], // 品牌首字母列表
        brandList: [],  // 品牌列表
        curLetter: '',  // 当前选中品牌首字母
        curBrandId: '', // 当前选中品牌
        showDialog: false   // 是否展示弹框
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

    changeCurBrand(brandId){
        this.setState({
            curBrandId: brandId,
            showDialog: true
        }, ()=>{
            this.props.history.push(`/main/car/sale/${brandId}`)
        })
    }

    closeDialog(){
        this.setState({
            showDialog: false
        })
    }

    render() {
        let {letterList, brandList, curLetter, showDialog, curBrandId} = this.state;
        return (
            <div style={{height: '100%',boxSizing: 'border-box', paddingBottom: '50px'}}>
                <Brand brandList={brandList} curLetter={curLetter} changeCurBrand={this.changeCurBrand}/>
                <Letter letterList={letterList} changCurLetter={this.changCurLetter}/>

                {/* 车型弹窗 */}
                {showDialog && <Dialog closeDialog={this.closeDialog} curBrandId={curBrandId} routes={this.props.routes}></Dialog>}
            </div>
        )
    }
}
