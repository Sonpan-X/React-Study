import React, { Component } from 'react';
import UnAntTodoList from './UnAntTodoList';
import store from './store';
import { getAxioList, getDeletItemAction, getAddToItemAction, getInputChangeAction } from './store/actionCreators'

class AntTodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleDeletItem = this.handleDeletItem.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStateChange)
  }
  render() {
    return (
     <UnAntTodoList
     inputValue = {this.state.inputValue}
     handleInputChange = {this.handleInputChange}
     handleBtnClick = {this.handleBtnClick}
     handleDeletItem = {this.handleDeletItem}
     list = {this.state.list}
     />
    )
  }
  componentDidMount() {
    // axios.get('./list.json').then((res)=>{
    //   const action = getInitListAction(res.data);
    //   store.dispatch(action);
    //   console.log(res);
    // })
    const action = getAxioList();
    store.dispatch(action);
  }
  
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }
  handleBtnClick() {
    const action = getAddToItemAction()
    store.dispatch(action);
  }
  handleDeletItem(index){
   const action = getDeletItemAction(index)
   store.dispatch(action);
  }
  handleStateChange() {
    this.setState(() => store.getState())
  }

}

export default AntTodoList