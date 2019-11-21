import listDispatch from './dispatch'
const action = {
    addList(data){
        listDispatch.dispatch({
            actionType:"ADD",
            data:data
        })
    },
    del(i){
        listDispatch.dispatch({
            actionType:"DEL",
            data:i
        })
    }
}
export default action