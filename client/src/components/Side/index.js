import React, {Component} from 'react';
import user from '../Header/user.png';
import { connect } from 'react-redux';
import './style.css';

const mapStateToProps = state => {
  return { user: state.authReducer.user };
};

class Aside extends Component {

  render() {
    return(
      <div className="App-side">
        <div className="App-side__content">
          <img className="App-side__content-avatar" src={user} alt=""/>
          <p>{this.props.user.info.username}</p>
          <p>{this.props.user.info.email}</p>
        </div>
      </div>
    )
  }
}

const Side = connect(mapStateToProps)(Aside);

export default Side;