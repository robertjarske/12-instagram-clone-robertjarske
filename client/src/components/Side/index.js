import React, {Component} from 'react';
import user from '../Header/user.png';
import './style.css';

class Side extends Component {

  render() {
    return(
      <div className="App-side">
        <div className="App-side__content">
          <img className="App-side__content-avatar" src={user} alt=""/>
          <p>trulyMe9000</p>
          <p>TM</p>
        </div>
      </div>
    )
  }
}

export default Side;