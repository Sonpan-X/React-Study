import { CHANGE_INPUT_VALUE, ADD_TO_ITEM, DELET_ITEM, INIT_LIST_DATA } from './actionType'
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value
});

export const getAddToItemAction = () => ({
  type: ADD_TO_ITEM
});

export const getDeletItemAction = (index) => ({
  type: DELET_ITEM,
  value: index
});

export const getInitListAction = (data) => ({
  type: INIT_LIST_DATA,
  value: data
});

export const getAxioList = ()=>{
  return (dispatch)=>{
    axios.get('./list.json').then((res)=>{
        const action = getInitListAction(res.data);
        dispatch(action);
        console.log(res);
      })
  }
}