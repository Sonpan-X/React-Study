import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
topic_item:[],
article_list:[],
recom_list:[],
author_list:[]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.TOPIC_LIST:
      return state.set('focused', true);
    default:
      return state;
  }
}