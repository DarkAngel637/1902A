import React from 'react'

export default function Province(props) {
    function selectProvince(id){
        props.selectProvince(id)
    }

    return (
        <div className="province">{
        props.provinces.map(item => {
            return <li 
                className={props.curProvinceId === item.CityID?'active': ''} 
                key={item.CityID} 
                onClick={()=>selectProvince(item.CityID)}>
                <span>{item.CityName}</span>
                {item.selectedCity.length?<span>{item.selectedCity.length}</span>:null}
            </li>
        })}</div>
    )
}
