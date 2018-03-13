import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import './style.css';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: this.props.user.isLoggedIn
    }
  }


  render() {
    if (!this.state.redirect) {
      return <Redirect push to="/signin" />;
    }
  return (
    <div className="Profile">
      <h2>Your account</h2>
      <p>{this.props.user.info.name}</p>
      <p>{this.props.user.info.email}</p>

    </div>
  )}
}

const mapStateToProps = state => {
  return { photos: state.photoReducer.photos, user: state.authReducer.user };
};

const Profile = connect(mapStateToProps)(User);

export default Profile;