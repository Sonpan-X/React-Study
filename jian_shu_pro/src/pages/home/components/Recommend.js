import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RecommendWrapper } from '../style';

class Recommend extends PureComponent {
	render() {
		return (
			<RecommendWrapper>
				{
					this.props.list.map((item) => {
						return <Link to=''><img class='item-pic' alt='' src={item.get('imgUrl')} key={item.get('id')}/></Link>
					})
				}
			</RecommendWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);