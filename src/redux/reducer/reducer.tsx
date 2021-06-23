import { combineReducers } from 'redux';
const defalutState = {
  inputValue: '你好',
  list: [],
  count: 0,
  user: ''
}

const count = (state = defalutState.count, action: any) => {
  if (action.type === 'change_count') {
    return action.value;
  }
  return state
}
const inputValue = (state = defalutState.inputValue, action: any) => {
  if (action.type === 'change_input') {
    return action.value;
  }
  return state
}
export default combineReducers({ inputValue, count });
