import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';


const HomeDataInitAction = (result) => ({
  type: constants.HOME_DATA_INIT,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeDataAction = () => {
  return (dispatch) => {
    axios.get('api/home.json')
      .then((res) => {
        let data = res.data.data;
        dispatch(HomeDataInitAction(data))
      }).catch((e) => { console.log(e) })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    });
  }
}

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})