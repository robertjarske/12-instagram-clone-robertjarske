import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import './style.css';


class User extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (!this.props.user.isLoggedIn) {
      return <Redirect push to="/signin" />;
    }
    
  return (
    <div className="Profile">
    <div className="profile_info">  
        <img className="profile_avatar" src={this.props.user.info.avatar} alt=""/>
        <p>{this.props.user.info.name}</p>
        <p>{this.props.user.info.email}</p>
    </div>
      <div className="profile_userPhotos">
        {
          this.props.photos.map(p => {
            if(p.uploaderId === this.props.user.info.id) {
              return <div className="profile_userPhoto" key={p._id} style={{backgroundImage: `url('${p.imageUrl}')`}}></div>
            } 
          })
        }
      </div>

    </div>
  )}
}

const mapStateToProps = state => {
  return { photos: state.photoReducer.photos, user: state.authReducer.user };
};

const Profile = connect(mapStateToProps)(User);

export default Profile;