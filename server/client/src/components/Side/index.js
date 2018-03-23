import React, {Component} from 'react';
import user from '../Header/user.svg';
import { connect } from 'react-redux';
import './style.css';

const mapStateToProps = state => {
  return { user: state.authReducer.user };
};

class Aside extends Component {
  render() {
    return(
      <div className="App-side">
      {this.props.user.info.username !== null ?
        <div className="App-side__content">
      
            <img className="App-side__content-avatar" src={this.props.user.info.avatar} alt=""/>
            <p>{this.props.user.info.username}</p>
            <p>{this.props.user.info.email}</p>
          
            </div>
            : ''}
      </div>
    )
  }
}

const Side = connect(mapStateToProps)(Aside);

export default Side;