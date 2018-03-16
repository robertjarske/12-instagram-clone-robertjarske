import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from 'react-router-dom';

import { addLike, putLike } from "../../actions";
import heart from '../Photo/heart.svg';
import redHeart from '../Photo/heart-red.svg';

const mapDispatchToProps = dispatch => {
  return {
    addLike: like => dispatch(addLike(like)),
    putLike: like => dispatch(putLike(like))
  };
};

const mapStateToProps = state => {
  return {user: state.authReducer.user}
}

class ConnectedLike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    if(this.props.user.isLoggedIn) {
      const photoId = this.props.photo._id;
      const user = this.props.user.info.id;

      return this.props.putLike({photoId: photoId, userId: user});
    } 

    return this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/signin" />;
    }
    return (
      <div className="likes">
      {this.props.photo.likes.includes(this.props.user.info.id) ?
        <div>
          <img onClick={this.handleClick} src={redHeart} alt="" />
          <p>{this.props.likes} likes</p>
        </div>
        : 
        <div>
          <img onClick={this.handleClick} src={heart} alt="" />
          <p>{this.props.likes} likes</p>
        </div>
      }
      </div>
    );
  }
}



const Like = connect(mapStateToProps, mapDispatchToProps)(ConnectedLike);

export default Like;
