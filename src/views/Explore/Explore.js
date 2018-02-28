import React, {Component} from 'react';
import { PhotoFeed } from '../../containers';
import { Side } from '../../components';
import './style.css';

const photos = ['https://placehold.it/500x500', 'https://placehold.it/500x500' ];

class Explore  extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render(){
    
    const isMobile = this.state.width <= 700;

    
    return (
      <div className="Explore">
      <div className="feed">
      {photos.map((photo, index )=> {
        return <PhotoFeed key={index} photo={photo}/>
      })}
      </div>
      {!isMobile ?
      <div className="side">
        <Side />
      </div>
      : ''}
      </div>
    )
  }
}

export default Explore;