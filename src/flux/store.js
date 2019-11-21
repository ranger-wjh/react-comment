import {EventEmitter} from 'events'

const store = {
    list:[
        {
            name:"张三",
            content:"hehehehehehe"
        }
    ],
    getList(){
        return this.list
    },
    //添加
    addList(obj){
        this.list.push(obj)
        this.addEmit()
        console.log(this.list)
    },
    //删除
    delOne(i){
        this.list.splice(i,1)
        this.addEmit()
    },
    addListener(callback){
        EventEmitter.prototype.on('add',callback)
    },
    addEmit(){
        EventEmitter.prototype.emit('add')
    }

}

export default store