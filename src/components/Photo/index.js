import React, { Component } from "react";
import user from "../Header/user.png";
import heart from "./heart.svg";
import comment from "./message-circle.svg";
import Form from "../comments/Form";
import CommentList from "../comments/CommentList";
import Like from '../Likes';
import { connect } from "react-redux";
import "./style.css";

const mapStateToProps = state => {
  return { photos: state.photos };
};

class ConnectedPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textFieldShowing: false
    };
  }

  showCommentField() {
    this.setState(prevState => ({
      textFieldShowing: !prevState.textFieldShowing
    }));
  }

  addLike() {
    debugger;

  }

  render() {
    return (
      <div className="App-photo">
        {this.props.photos.map(photo => (
        <div key={photo.id}>
          <div className="photoHeader">
            <img className="avatar" src={user} alt="" />
            <p>{photo.uploader}</p>
          </div>
          <div className="App-photo__photoHolder" key={photo.id}>
            <img className="App-photo__photo" src={photo.photoUrl} alt="" />
          </div>
          <div className="photoFooter">
            <div className="icons">
              {/*<div className="likes">
                <img onClick={this.addLike.bind(this)} src={heart} alt="" />
                <p>{photo.likes} likes</p>
                </div>*/}
                <Like photoId={photo.id} likes={photo.likes}/>

              <img
                onClick={this.showCommentField.bind(this)}
                src={comment}
                alt=""
              />
            </div>
            <div className="comments">
              <CommentList comments={photo.comments} />
              {this.state.textFieldShowing ?
              <Form photoId={photo.id}/>
              : 
               ""
                }
            </div>
          </div>
        </div>
      ))}
    </div>
    );
  }
}

const Photo = connect(mapStateToProps)(ConnectedPhoto);

export default Photo;
