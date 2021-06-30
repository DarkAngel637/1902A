import {Switch, Redirect, Route} from 'react-router-dom'

function RouterView(props){
    return <Switch>{
        props.routes.map(item=>{
            // 判断是否是重定向
            if (item.to){
                // 在重定向的基础上判断是否有from，做精准匹配
                if (item.from){
                    return <Redirect from={item.from} exact to={item.to} key={item.to}/> 
                }
                return <Redirect to={item.to} key={item.to}/>
            }
            // 渲染普通路由
            return <Route path={item.path} key={item.path} render={routeProps=>{
                // 判断有没有子路由，如果有子路由，把子路由配置项通过props传入路由组件
                if (item.children){
                    return <item.component {...routeProps} routes={item.children}/>
                }else{
                    return <item.component {...routeProps} />
                }
            }}></Route>
        })    
    }</Switch>
}

export default RouterView;