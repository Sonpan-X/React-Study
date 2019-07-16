import { CHANGE_INPUT_VALUE, ADD_TO_ITEM, DELET_ITEM, INIT_LIST_DATA } from './actionType'
const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === INIT_LIST_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.value
    return newState;
  }
  if (action.type === ADD_TO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELET_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.value, 1);
    return newState;
  }
  return state;
}