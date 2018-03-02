import React, { Component } from 'react';
import { Grid, Side } from '../../components';

class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App-photoGrid">
        <Grid />
        <Side />
      </div>
     )
  }
}
 
export default PhotoGrid;