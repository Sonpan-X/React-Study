import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ArticleWrapper, ArticleItem, ArticleLeft,LeadMore } from '../style';
class List extends Component {
  render() {
    return (
      <ArticleWrapper>
        <ArticleItem>
   
          <img className="article-img" src="//upload-images.jianshu.io/upload_images/14764978-ec185f8e719bce01?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt='' />
     
          <ArticleLeft className="articleLeft">
            <h1  className="title">中药调理皮肤变好</h1>
            <p className="dec">经过一周时间的中药调理，我的皮肤又变的光滑、白皙。虽然赶不上以前的年轻，但是气色真的好多了。 几个月来一直走不出自己的圈子，连抓药的时间都挤不出...</p>
          </ArticleLeft>
        </ArticleItem>
       <LeadMore onClick={this.props.getMoreList}>更多文字</LeadMore>
      </ArticleWrapper>
    )
  }
}
const mapState = ()=>({

})

const mapDispatch = ()=>({
 getMoreList(){
  console.log("click");
 }
})

export default  connect(mapState,mapDispatch)(List);