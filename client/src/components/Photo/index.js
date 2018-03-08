import React, { Component } from "react";
import { connect } from "react-redux";
import { showTextField } from "../../actions";
import Form from "../comments/Form";
import CommentList from "../comments/CommentList";
import Like from '../Likes';
import user from "../Header/user.png";
import comment from "./message-circle.svg";
import "./style.css";

const mapStateToProps = state => {
  return { photos: state.photos };
};

const mapDispatchToProps = dispatch => {
  return {
    showTextField: bool => dispatch(showTextField(bool))
  };
};

class ConnectedPhoto extends Component {

  handleClick(photo, event) {
    const photoId = photo.id;
    const bool = !photo.textFieldShowing;
    
    this.props.showTextField({ photoId, bool });
    
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
          <div className="App-photo__photoHolder" key={photo.id} style={{backgroundImage: `url('${photo.imageUrl}')`}}>
          </div>
          <div className="photoFooter">
            <div className="icons">  
              <Like photoId={photo.id} likes={photo.likes}/>
              <img
                onClick={this.handleClick.bind(this, photo)}
                src={comment}
                alt=""
              />
            </div>
            <div className="comments">
              <CommentList comments={photo.comments} />
              {photo.textFieldShowing ?
              <Form photoId={photo.id}/>
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
