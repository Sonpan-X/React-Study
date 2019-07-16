import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
topic_item:[
  {
    id:1,
    title:'热门社会',
    imgUrl:'//upload.jianshu.io/collections/images/18532/android.graphics.Bitmap_1c17451.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
  },
  {
    id:2,
    title:'',
    imgUrl:''
  }
]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.TOPIC_LIST:
      return state.set('focused', true);
    default:
      return state;
  }
}