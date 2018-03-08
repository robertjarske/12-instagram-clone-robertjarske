import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions';
import { Grid } from '../../components';
import './style.css';


class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    this.props.dispatch(fetchPhotos())
  }

  render() { 
    const { photos } = this.props;

    return ( 
      <div className="App-photoGrid">
      <div className="App-grid">
      { 
        photos.map((photo) => (
          <div className="App-grid__holder" key={photo.id}>
            <Grid photo={photo} />
          </div>
        ))
      }
      </div>
      </div>
     );
  }
}

const mapStateToProps = state => ({
  photos: state.photos
});
 
export default connect(mapStateToProps)(PhotoGrid);