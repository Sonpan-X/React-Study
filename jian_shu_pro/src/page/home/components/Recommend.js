import React, { Component } from 'react';
import {connect} from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        <RecommendItem imgUrl="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png">
        </RecommendItem>
      </RecommendWrapper>
    )
  }
}
const mapState = ()=>{
return {}
}
export default connect(mapState)(Recommend)