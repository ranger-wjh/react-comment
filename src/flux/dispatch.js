import {Dispatcher} from 'flux'
import store from './store'
const listDispatch = new Dispatcher()
listDispatch.register((action)=>{
    switch(action.actionType){
        case "ADD":
        store.addList(action.data)
        break;
        case "DEL":
        store.delOne(action.data)
    }
})
export default listDispatch