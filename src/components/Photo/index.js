import React, {Component} from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-photo">
        <img src={this.props.photo} alt=""/>
      </div>
    )
  }
}

export default Photo;