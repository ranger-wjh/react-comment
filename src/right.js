import React, { Component } from 'react'
import action from './flux/action'
import store from './flux/store'
export default class Right extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:store.getList()
        }
        this.getList = this.getList.bind(this)
    }
    componentDidMount(){
        store.addListener(this.getList)
    }
    getList(){
        const list = store.getList()
        this.setState({
            list
        })
    }
    //删除
    del(i){
        action.del(i)
    }
    render() {
        return (
            <div className='right'>
               <ul>
                   {
                       this.state.list.map((item,index)=>{
                       return <li key={index}>{item.name}说:{item.content}
                                <p onClick = {this.del.bind(this,index)}>删除</p>
                       </li>
                       })
                   }
               </ul>
            </div>
        )
    }
}
