import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Editor from './components/Editor';
import { 
	WriterWrapper,
	WriterLeft,
	WriterRight,
	ArticleWrapper,
	EditorWrapper,
} from './style';

class Write extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if (loginStatus) {
			return (
				<WriterWrapper>
					<WriterLeft>
					</WriterLeft>
					<WriterRight>
						<ArticleWrapper></ArticleWrapper>
						<EditorWrapper>
							<Editor/>
						</EditorWrapper>
					</WriterRight>
				</WriterWrapper>
			)
		}else {
			return <Redirect to='/login'/>
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Write);