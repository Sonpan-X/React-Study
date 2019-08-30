import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 750px;
	overflow: hidden;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 66.66667%;
	.banner-img {
		width: 100%;
	}
`;

export const HomeRight = styled.div`
	width: 29.16667%;
	float: right;
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	overflow: hidden;
	position:relative;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		position:absolute;
		right:0;
		top:50%;
		margin-top:-50px;
		display: block;
		width: 125px;
		height: 100px;
		border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
  padding-right: 165px;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 100%;
	.item-pic{
		display:block;
		width:100%;
		padding-top:5px;
	}
`;


export const WriterWrapper = styled.div`
	width: 100%;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
`