/**
 * 获取地址栏的信息，注入到组件里面
 * url: http://127.0.0.1:8001/detail/100?a=1&b=2#A
 * {
 *  host: '127.0.0.1',
 *  port: 8001,
 *  pathname: '/detail/100',
 *  query: {a: 1, b:2}
 *  hash: 'A'
 * }
 */
export default function WithUrl(WrapComponent){
    // 处理地址栏   
    let host = window.location.host,
        port = window.location.port || 80,
        pathname = window.location.pathname,
        hash = window.location.hash;
    let queryIndex = window.location.href.indexOf('?'),
        hashIndex = window.location.href.indexOf('#');
    let queryString = window.location.href.slice(queryIndex+1, hashIndex);

    if (hashIndex < 0){
        queryString = window.location.href.slice(queryIndex+1);
    }
    let query = {};
    queryString.split('&').forEach(item=>{
        let array = item.split('=');
        query[array[0]] = array[1];
    })

    return (props)=>{
        return <WrapComponent {...props}  {...{host, port, hash, pathname, query}}/>
    }
}