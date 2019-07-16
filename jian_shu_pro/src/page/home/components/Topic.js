import React, { Component } from 'react';
import {connect} from  'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img className="topic-pic" src="https://upload.jianshu.io/collections/images/18532/android.graphics.Bitmap_1c17451.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp" alt="topic-pic" />
          社会热点
        </TopicItem>
        
      </TopicWrapper>
    )
  }
}
const mapState = ()=>{
return{
  
}
}

export default connect(mapState)(Topic);