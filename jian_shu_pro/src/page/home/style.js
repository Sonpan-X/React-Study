import styled from 'styled-components';

export const HomeWrapper = styled.div`
 width:960px;
 margin: 0 auto;
 over-flow:hidden;
`;

export const HomeLeft = styled.div`
 float:left;
 margin-left:15px;
 width:625px;
 padding-top:30px;
 .banner-img{
   width:625px;
   height:270px;
 }
`;

export const HomeRight = styled.div`
 float:right;
 width:280px;
 padding: 30px 0 0;
`;

export const TopicWrapper = styled.div`
width:640px;
overflow:hidden;
margin-left:-18px;
margin-top:5px;
border-bottom: 1px solid #ddd; 
`
export const TopicItem = styled.div`
float:left;
height:32px;
line-height:32px;
margin-left:18px;
margin-bottom:18px;
padding-right:10px;
background:#f7f7f7;
font-size:14px;
color:#000;
broder:1px solid #cdcdcd;
border-radius:4px;
.topic-pic{
  display:block;
  float:left;
  width:32px;
  height:32px;
}
`

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
	width: 500px;
	float: left;
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
margin-top: -4px;
padding-bottom: 4px;
min-height: 228px;
`

export const RecommendItem = styled.div`
width: 100%;
min-height: 50px;
margin-bottom: 6px;
background:url(${(props)=>props.imgUrl});
background-size:contain;
`

export const WriterWrapper = styled.div`
margin-top: 20px;

`
export const WriterInfoSwitch = styled.div`
float:right;
font-size:12px;
cursor:pointer;
color:#969696;
.spin{
  display: block;
  float: left;
  font-size:10px;
  margin-right: 2px;
  transition: all .2s ease;
  transform: rotate(0deg);
  transfrom-orgin: center center ;
}
`
export const WriterTitle = styled.div`
margin-bottom:4px;
color:#969696;
font-size:14px;
`

export const WriterInfo = styled.div`
margin-top: 15px;
line-height: 20px;

.avatar{
  float: left;
  width: 48px;
  height: 48px;
  margin-right: 10px;
  .avatar-img{
    width:48px;
    height:48px;
    border-radius:50%;
  }
}
.follow{
  float:right;
  margin-top: 5px;
  padding: 0;
  font-size: 13px;
  color: #42c02e;
  text-decoration-line: none;
}
.name{
  padding-top: 5px;
  margin-right: 60px;
  font-size: 14px;
  display: block;
  text-decoration-line: none;
}
.info{
  margin: 2px 0 10px;
  font-size: 12px;
  color: #969696;
}
`
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
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
`