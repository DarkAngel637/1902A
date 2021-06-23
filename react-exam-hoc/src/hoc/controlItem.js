export default function controlItem(options){
    return function(WrapComponent){
        return <WrapComponent {...options}/>
    }
}