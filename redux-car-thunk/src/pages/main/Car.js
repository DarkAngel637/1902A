import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import Letter from '../../components/Letter'
import Brand from '../../components/Brand'
import Dialog from '../../components/Dialog'
// 引入thunk
import {getBrandList} from '../../store/thunk'

class Car extends Component {

    constructor(props) {
        super(props)
        this.changCurLetter = this.changCurLetter.bind(this);
        this.changeCurBrand = this.changeCurBrand.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }

    async componentDidMount(){
        this.props.getBrandList();
    }

    changCurLetter(letter){
       this.props.changeLetter(letter)
    }

    changeCurBrand(brandId){
        this.props.changeDialog(true);
        this.props.changeBrandId(brandId);
        this.props.history.push(`/main/car/sale/${brandId}`)
    }

    closeDialog(){
       this.props.changeDialog(false)
    }

    render() {
        let {letterList, brandList, curLetter, showDialog, curBrandId} = this.props;
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

const mapStateToProps = state=>{
    return state;
}

const mapDispatchToProps = dispatch =>{
    return {
        getBrandList: ()=>{
            dispatch(getBrandList())
        },
        changeDialog: payload=>{
            dispatch({
                type: 'CHANGE_DIALOG',
                payload
            })
        }, 
        changeBrandId: payload=>{
            dispatch({
                type: 'CHANGE_BRAND_ID',
                payload
            })
        },
        changeLetter: payload=>{
            dispatch({
                type: 'CHANGE_LETTER',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Car)