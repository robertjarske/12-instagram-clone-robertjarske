import React, { Component } from "react";
import { connect } from "react-redux";

import { addLike } from "../../actions";
import heart from '../Photo/heart.svg';

const mapDispatchToProps = dispatch => {
  return {
    addLike: like => dispatch(addLike(like))
  };
};

class ConnectedLike extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    const photoId = this.props.photoId;
    const like = 1;

    this.props.addLike({ photoId, like });
  }

  render() {
    return (
      <div className="likes">
        <img onClick={this.handleClick} src={heart} alt="" />
        <p>{this.props.likes} likes</p>
      </div>
    );
  }
}

const Like = connect(null, mapDispatchToProps)(ConnectedLike);

export default Like;
