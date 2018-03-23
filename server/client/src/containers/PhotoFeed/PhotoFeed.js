import React, { Component } from 'react';
import {Photo} from '../../components';
import './style.css';

class PhotoFeed extends Component {

  render() {
    return (
      <div className="App-photofeed">
        <Photo />
        
      </div>
    )
  }
}

export default PhotoFeed;