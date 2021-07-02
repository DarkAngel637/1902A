import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

export default function RouterView(props){
    return <Switch>{
        props.routes.map(item=>{
            if (item.to){
                if (item.from){
                    return <Redirect key={item.to} to={item.to} from={item.from} exact></Redirect>
                }else{
                    return <Redirect key={item.to} to={item.to}></Redirect>
                }
            }
            return <Route key={item.path} path={item.path} render={routeProps=>{
                if (item.children){
                    return <item.component {...routeProps} routes={item.children}/>
                }else{
                    return <item.component {...routeProps} />
                }
            }}></Route>
        })
    }</Switch>
}