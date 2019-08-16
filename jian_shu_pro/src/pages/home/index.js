import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { BackTop } from './style';

import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';

class Home extends PureComponent {
	constructor(props) {
    super(props);
		this.list = React.createRef();
  }

	handleScrollTop() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{ this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow.bind(this),false);
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow.bind(this),false);
	}

}

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll']),
	page:state.getIn(['home','articlePage']),
})


const mapDispatch = (dispatch,ownProps) => {
	return {
		changeHomeData() {
			dispatch(actionCreators.getHomeInfo());
		},
		changeScrollTopShow() {
			const elm = document.documentElement;
			if (elm.scrollTop > 100) {
				dispatch(actionCreators.toggleTopShow(true))
			}else {
				dispatch(actionCreators.toggleTopShow(false))
			}
			if(Math.ceil(elm.clientHeight+elm.scrollTop) >= elm.scrollHeight){
				if(this.timer){
					clearTimeout(this.timer)
				}
					this.timer = setTimeout(() => {
						dispatch(actionCreators.getMoreList(this.props.page));
				 	}, 500);
			}
		},
	}
};



export default connect(mapState, mapDispatch)(Home);
