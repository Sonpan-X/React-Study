import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelet = this.handleItemDelet.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input className="input ht" id="insertArea" value={this.state.inputValue}
            onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getItem()}
        </ul>
      </Fragment>

    )
  }
  getItem(){
   return (this.state.list.map((item,index)=> {
    // return (
    //   <div key = {index}>
    //   <TodoItem 
    //   content={item} 
    //   index={index} 
    //   itemDelet={this.handleItemDelet}/>
    //   {/*<li key={index} 
    //        onClick={this.handleItemDelet.bind(this)}
    //        dangerouslySetInnerHTML={{__html:item}}
    // ></li>*/}
    //  </div>
    //  )    
    return (
      <TodoItem 
      key={index}
      content={item} 
      index={index} 
      itemDelet={this.handleItemDelet}/>
     )   
  }))
  }
  handleInputChange(e) {
    const value = e.target.value;
    this.setState(()=>({
      inputValue:value
    }))
    // this.setState({
    //  inputValue:e.target.value
    // })
  }
  handleBtnClick(e) {
  //  this.setState({
  //    list:[...this.state.list,this.state.inputValue],
  //    inputValue:''
  //  })
  this.setState((prevState)=>({
    list:[...prevState.list,prevState.inputValue],
    inputValue:''
  }))
  }
  handleItemDelet(index) {
  //  const list = [...this.state.list];
  //  list.splice(index,1);
  //  console.log(index);
  //  this.setState({
  //    list:list
  //  })
  this.setState((prevState)=>{
    const list = [...this.state.list];
    list.splice(index,1);
    return {list} 
  })
  }
}

export default TodoList