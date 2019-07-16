import React, { Component } from 'react';
import { WriterWrapper, WriterTitle, WriterInfoSwitch, WriterInfo } from '../style';
import {connect} from 'react-redux' ;

 class Writer extends Component {
  render() {
    return (
      <WriterWrapper>
        <WriterTitle>
          作者推荐
         <WriterInfoSwitch >
            <i ref={(icon) => { this.spinIcon = icon }} className={'iconfont spin'}>&#xe851;</i>
            换一批
           </WriterInfoSwitch>
        </WriterTitle>
        <WriterInfo>
          <a href='/' className='avatar'>
            <img className='avatar-img' src='https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' /></a>
          <a href='/' className='follow'>
            <i className='iconfont'></i>
            关注
            </a>
          <a href='/' className='name'>诗人</a>
          <p className='info'>写了668.1k字 · 13.6k喜欢</p>
        </WriterInfo>
        <WriterInfo>
          <a href='/' className='avatar'>
            <img className='avatar-img' src='https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' /></a>
          <a href='/' className='follow'>
            <i className='iconfont'></i>
            关注
            </a>
          <a href='/' className='name'>诗人</a>
          <p className='info'>写了668.1k字 · 13.6k喜欢</p>
        </WriterInfo>
        <WriterInfo>
          <a href='/' className='avatar'>
            <img className='avatar-img' src='https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' /></a>
          <a href='/' className='follow'>
            <i className='iconfont'></i>
            关注
            </a>
          <a href='/' className='name'>诗人</a>
          <p className='info'>写了668.1k字 · 13.6k喜欢</p>
        </WriterInfo>
        <WriterInfo>
          <a href='/' className='avatar'>
            <img className='avatar-img' src='https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' /></a>
          <a href='/' className='follow'>
            <i className='iconfont'></i>
            关注
            </a>
          <a href='/' className='name'>诗人</a>
          <p className='info'>写了668.1k字 · 13.6k喜欢</p>
        </WriterInfo>
      </WriterWrapper>
    )
  }
}
const mapState=()=>{
return{}
}


export default connect(mapState)(Writer);