import React, { PureComponent } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class List extends PureComponent {
	render() {
		const { list } = this.props;
		return (
			<div>
				{
					list.map((item, index) => {
						return (
							<Link key={index} to={'/detail/' + item.get('id')}>
								<ListItem > 
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						);
					})
				}
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage']),
	bottom: state.getIn(['home','bottom'])
});

const mapDispatch = (dispatch) => ({

})


export default connect(mapState, mapDispatch)(List);