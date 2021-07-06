import axios from 'axios'

// 普通的action，是个对象
export function getAction(){
    return {
        type: 'ADD_NUM',
        payload: ''
    }
}

// 使用thunk之后的异步action，是个函数
export function getBrandList(){
    return async dispatch=>{
        let result = await axios.get('http://baojia.chelun.com/v2-car-getMasterBrandList.html?_1625034677422');
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
            dispatch({
                type: 'GET_BRAND_LIST',
                payload: {
                    letterList,
                    curLetter: letterList[0],
                    brandList
                }
            })
        }
    }
}