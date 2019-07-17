import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topic_item: [],
  article_list: [],
  recom_list: [],
  author_list: [],
  articlePage: 0,
  showScroll: false
});

function HomeDataInit(state, action) {
  console.log(action)
  return state.merge({
    topic_item: fromJS(action.topicList),
    article_list: fromJS(action.articleList),
    recom_list: fromJS(action.recommendList),
  })
}

const addArticleList = (state, action) => {
	return state.merge({
		'article_list': state.get('article_list').concat(action.list),
		'articlePage': action.nextPage
	});
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.HOME_DATA_INIT:
      return HomeDataInit(state, action);
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show);
    default:
      return state;
  }
}