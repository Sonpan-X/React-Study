import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const { content } = this.props;
    return (<div onClick={this.handleClick}>{content}</div>)
  }
  handleClick() {
    const { index, itemDelet } = this.props;
    itemDelet(index)
  }

}
TodoItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  itemDelet: PropTypes.func
}
export default TodoItem