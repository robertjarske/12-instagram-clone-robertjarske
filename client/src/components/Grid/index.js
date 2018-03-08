import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const { photo } = this.props;

    return ( 
      <div className="App-grid__photoHolder" style={{backgroundImage: `url('${photo.imageUrl}')`}}>
      
      </div>
     )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);