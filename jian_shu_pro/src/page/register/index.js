import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Register extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if (!loginStatus) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder='账号' innerRef={(input) => {this.account = input}}/>
						<Input placeholder='密码' type='password' innerRef={(input) => {this.password = input}}/>
						<Input placeholder='确认密码' type='password' innerRef={(input) => {this.comfirmPassword = input}}/>
						<Button onClick={() => this.props.login(this.account, this.password)}>注册</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return <Redirect to='/'/>
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
	}
})

export default connect(mapState, mapDispatch)(Register);