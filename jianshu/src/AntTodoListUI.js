import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

class AntTodoListUI extends Component{

  render(){
    return (<div style={{ marginTop: 30, marginLeft: 30 }}>
      <div>
        <Input value={this.props.inputValue} onChange={this.props.handleInputChange} style={{ width: "300px", marginRight: "30px" }} />
        <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
      </div>
      <List
        style={{ width: "300px" }}
        bordered
        dataSource={this.props.list}
        renderItem={(item,index)=> (
          <List.Item index={index} onClick = {this.props.handleDeletItem}>
            {item}
          </List.Item>
        )}
      />
    </div>)
  }
}

export default AntTodoListUI