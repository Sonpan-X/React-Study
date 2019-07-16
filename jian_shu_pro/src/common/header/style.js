import styled from 'styled-components';
import picLogo from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
 position: relative
 height: 58px;
 border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({ href: '/' })`
position:absolute;
top:0;
left:0
display:block;
height:58px;
width:100px;
background:url(${picLogo});
background-size:contain;
`

export const Nav = styled.div`
width: 960px;
height: 100%;
margin: 0 auto;

`

export const NavItem = styled.div`
line-height:56px;
padding: 0 15px;
font-size: 17px;
&.left{
  float:left;
}
&.right{
  float:right;
  color:#969696;
  margin-right:20px;
}
&.active{
  color:#ea6f5a;
}
`
export const SearchWrapper = styled.div`
 position: relative;
 float:left
 .zoom{
   position:absolute;
   right:5px;
   bottom:5px;
   width:30px;
   line-height:30px;
   border-radius:15px;
   text-align:center;
   &.focused{
    background:#777;
    color:#fff;
   }
 }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
 width: 160px;
 height: 38px;
 padding:0 30px 0 20px;
 box-sizing: border-box;
 margin-top: 9px;
 margin-left: 20px;
 border:none;
 outline: none;
 border-radius: 19px;
 color:#777;
 background: #eee;
 font-size: 14px;
 &::placeholder: #999;
 &.focused{
   width:240px;
 }
 &.slide-enter{
  transition: all 200ms ease-out;
}
&.slide-enter-active{
  width:240px;
}
&.slide-exit{
 transition: all 200ms ease-out;
}
&.slide-exit-active{
 width:160px;
}
`
export const SearchInfo = styled.div`
position:absolute;
left:20px;
top:58px;
width:250px;
box-sizing: border-box;
padding:20px 20px 10px;
background:#fff;
box-shadow: 0 0 8px rgba(0 ,0 ,0 ,.2);
`
export const SearchInfoTitle = styled.div`
line-hight: 20px;
height:20px;
color:#969696;
font-size:14px;
margin-bottom: 10px;
`
export const SearchInfoSwitch = styled.div`
float:right;
font-size:12px;
cursor:pointer;
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
export const SearchInfoList = styled.div`
overflow:hidden;
`
export const SearchInfoItem = styled.a`
float:left;
display:block;
line-height:20px;
text-align: center;
margin-right:10px;
margin-bottom:15px;
padding: 2px 6px;
font-size: 12px;
color: #787878;
border: 1px solid #ddd;
border-radius: 3px;
`

export const Addition = styled.div`
position:absolute;
right: 0;
top: 0;
height: 56px;
`;

export const Button = styled.div`
float:right;
margin-top: 9px;
margin-right:20px;
padding: 0 20px;
line-height: 38px;
border-radius: 19px;
border:1px solid #ea6f5a;
font-size: 14px;
&.reg{
  color:#ea6f5a
}
&.writting{
  color:#fff;
  background: #ea6f5a;
}
`