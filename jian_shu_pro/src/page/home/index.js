import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as ActionCreator from './store/actionCreator';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import Topic from './components/Topic';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

class Home extends PureComponent {
  handleScrollTop() {
		window.scrollTo(0, 0);
	}
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
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.getHomeInitAxios();
    this.bindEvents();
  }

  componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}
}

const mapState = () => ({

})

const mapDispatch = (dispatch) => ({
  getHomeInitAxios() {
    dispatch(ActionCreator.getHomeDataAction());
  },
  changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(ActionCreator.toggleTopShow(true))
		}else {
			dispatch(ActionCreator.toggleTopShow(false))
		}
	}
})

export default connect(mapState, mapDispatch)(Home);
