class Bus{
    listeners = {};

    // 绑定事件
    on(type, callback){
        if (this.listeners[type]){
            this.listeners[type].push(callback);
        }else{
            this.listeners[type] = [callback];
        }
    }

    // 触发事件
    emit(type, payload){
        if (this.listeners[type]){
            this.listeners[type].forEach(item=>{
                item(payload);
            })
        }
    }

    // 解绑事件
    off(type, callback){
        let index = this.listeners[type].findIndex(item=>item===callback);
        this.listeners[type].splice(index, 1);
    }
}

export default new Bus();