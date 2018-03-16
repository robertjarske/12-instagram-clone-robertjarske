import React, { Component } from "react";
import { connect } from "react-redux";
import { showTextField, uploadPhoto } from "../../actions";
import Form from "../comments/Form";
import CommentList from "../comments/CommentList";
import Like from '../Likes';
import user from "../Header/user.png";
import comment from "./message-circle.svg";
import "./style.css";

const mapStateToProps = state => {
  return { photos: state.photoReducer.photos, user: state.authReducer.user };
};

const mapDispatchToProps = dispatch => {
  return {
    showTextField: bool => dispatch(showTextField(bool)),
    uploadPhoto: photo => dispatch(uploadPhoto(photo))
  };
};

class ConnectedPhoto extends Component {

  handleClick(photo, event) {
    const photoId = photo._id;
    const bool = !photo.textFieldShowing;
    
    this.props.showTextField({ photoId, bool });
    
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = this.props.user;
    this.props.uploadPhoto({formData, user});
  }

  render() {
    return (
      <div className="App-photo">
      <form className="upload_form" onSubmit={this.handleSubmit.bind(this)} encType="multipart/form-data">
      <input type="file" name="photo"/>
      <button type="submit">Upload</button>
      </form>
      {this.props.photos.map(photo => (
        
          <div key={photo._id}>
          <div className="photoHeader">
            <img className="avatar" src={user} alt="" />
            <p>{photo.uploader}</p>
          </div>
          <div className="App-photo__photoHolder" key={photo.id} style={{backgroundImage: `url('${photo.imageUrl}')`}}>
          </div>
          <div className="photoFooter">
            <div className="icons">  
              <Like photoId={photo._id} likes={photo.likes.length}/>
              <img
                onClick={this.handleClick.bind(this, photo)}
                src={comment}
                alt=""
              />
            </div>
            <div className="comments">
              <CommentList comments={photo.comments} />
              {photo.textFieldShowing ?
              <Form user={this.props.user} photoId={photo._id}/>
              : 
               ""
                }
            </div>
          </div>
        </div>)
      )}
    </div>
    );
  }
}

const Photo = connect(mapStateToProps, mapDispatchToProps)(ConnectedPhoto);

export default Photo;
