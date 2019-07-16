import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from './store/';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
  SearchWrapper
} from './style';

class Header extends Component {
  render() {
    const { focused, list, handleFocused, handleInputBlur } = this.props;
    return (<div>
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch onFocus={()=>{handleFocused(list)}} onBlur={handleInputBlur} className={focused ? 'focused' : ''}>
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</i>
            {this.getSearchList()}
          </SearchWrapper>

        </Nav>
        <Addition>
          <Button className="writting"><i className="iconfont">&#xe62e;</i>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    </div>)
  };

  getSearchList() {
    const { focused, mouseIn, list, page, totalPage, changePage, handleMouseEnter, handleMouseLeave } = this.props;
    const itemList = list.toJS()
    const pageList = [];
    if (itemList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (itemList[i]) {
          pageList.push(
            <SearchInfoItem key={itemList[i]}>{itemList[i]}</SearchInfoItem>
          )
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
         <SearchInfoSwitch
              onClick={() => { changePage(page, totalPage,this.spinIcon) }}
            >
              <i ref = {(icon)=>{this.spinIcon=icon}} className={'iconfont spin'}>&#xe851;</i>
              换一批
           </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>)
    } else {
      return null;
    }
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleFocused(list) {
      (list.size === 0) && dispatch(ActionCreator.getListChange());
      dispatch(ActionCreator.getSearchFocusedAction());
    },
    handleInputBlur() {
      dispatch(ActionCreator.getSearchBlurAction());
    },
    handleMouseEnter() {
      dispatch(ActionCreator.getMouseEnterAction());
    },
    handleMouseLeave() {
      dispatch(ActionCreator.getMouseLeaveAction());
    },
    changePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle){
        originAngle = parseInt(originAngle,10) + 360;
       
      }else{
        originAngle = 360;
      }
      spin.style.transform = `rotate(${originAngle}deg)`;
      if (page < totalPage) {
        dispatch(ActionCreator.changePage(page + 1));
      } else {
        dispatch(ActionCreator.changePage(1));
      }
    }
  }

}

export default connect(mapStateToProps, mapDispathToProps)(Header);