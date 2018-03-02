import React, { Component } from 'react';
import {Photo} from '../../components';
import './style.css';

class PhotoFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-photofeed">
        <Photo /*{photo={this.props.photo}}*//>
        
      </div>
    )
  }
}

export default PhotoFeed;