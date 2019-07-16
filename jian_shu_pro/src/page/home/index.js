import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import Topic from './components/Topic';

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://img14.360buyimg.com/da/jfs/t1/37754/5/13795/93828/5d26f875E32bae014/a512e9c9d0a06858.jpg!q95.webp" alt="banner-img" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}