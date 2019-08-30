import React from 'react';
import { Input, Button, List } from 'antd';
const UnAntTodoList = (props)=>{
    return (<div style={{ marginTop: 30, marginLeft: 30 }}>
      <div>
        <Input value={props.inputValue} onChange={props.handleInputChange} style={{ width: "300px", marginRight: "30px" }} />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        style={{ width: "300px" }}
        bordered
        dataSource={props.list}
        renderItem={(item,index)=> (
          <List.Item onClick = {()=>props.handleDeletItem(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>)
}


export default UnAntTodoList