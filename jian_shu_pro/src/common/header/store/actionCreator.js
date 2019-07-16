import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const getSearchFocusedAction = () => ({
  type: constants.SEARCH_FOCUSED
})

export const getSearchBlurAction = () => ({
  type: constants.SEARCH_BLUR
})

export const getMouseEnterAction = () => ({
  type: constants.MOUSE_ENTER
})

export const getMouseLeaveAction = () => ({
  type: constants.MOUSE_LEAVE
})

const listChangeAction = (data, totalPage) => ({
  type: constants.CHANGE_LIST,
  data,
  totalPage
})

export const getListChange = () => {
  return (dispatch) => {
    axios.get('api/headerList.json')
      .then((res) => {
        const list = res.data.data;
        let totalPage = Math.ceil(list.length / 10);
        dispatch(listChangeAction(fromJS(list), totalPage))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const changePage = (page) => ({
  type: constants.PAGE_CHANGE,
  page
})