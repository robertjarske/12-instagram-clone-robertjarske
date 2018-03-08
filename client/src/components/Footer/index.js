import React, { Component } from 'react';
import './style.css';


class Footer extends Component {
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

  render() { 
    const isMobile = this.state.width <= 700; 

    return (
      <footer className="App-footer">
        {!isMobile ?
          <div>
            <p>Robert Jarske Eriksson</p>
            <p>
            @ -
            robert.jarske.eriksson@chasacademy.se
            </p>
          </div>
          : ''
          }
        </footer>
    )
  }
}


export default Footer;