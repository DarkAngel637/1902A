export function throttle(func, delay = 300){
    let start = +new Date();

    return function(){
        let end = +new Date();
        if (end - start > delay){
            func(arguments);
            start = end;
        }
    }
}

export function debounce(func, delay = 300){
    let inter = 0;

    return function(){
        window.clearTimeout(inter);
        inter = setTimeout(()=>{
            func(arguments);
        }, delay);
    }
}