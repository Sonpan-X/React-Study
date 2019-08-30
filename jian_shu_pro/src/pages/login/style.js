import styled from 'styled-components';

export const LoginWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top:0;
	background: #eee;
`;

export const LoginBox = styled.div`
	width: 400px;
	position: absolute;
	left: 50%;
	top:50%;
	transform-origin:50% 50%;
	transform: translate(-50%, -50%);
	margin:auto;
	padding:20px 0;
	border-radius:10px;
	background: #fff;
	overflow:hidden;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
	display: block;
	width: 200px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	margin: 20px auto;
	color: #777;
`;

export const Button = styled.div`
	width: 220px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 10px auto;
	text-align: center;
`;