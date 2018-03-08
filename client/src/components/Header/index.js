import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import home from './home.png';
import instagram from './instagram.png'
import compass from './compass.png'
import user from './user.png'
import './style.css';

class Header extends Component {
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
      <header className="App-header">
        <h1 className="App-header__logo">
        <img className="App-header__logo-img" src={instagram} alt=""/>  <Link to="/" >PhotoGrm </Link>
        </h1>
        { !isMobile ?
        <nav>
          <ul className="App-header__nav">
            <li>
              <Link to="/"><img src={home} alt=""/></Link>
            </li>
            <li>
            <Link to="/explore"><img src={compass} alt=""/></Link>
            </li>
            <li>
              <Link to="/profile"><img src={user} alt=""/></Link>
            </li>
          </ul>
        </nav>
      : 
      <nav className="App-header__nav-low">
          <ul className="App-header__nav-low-ul">
            <li>
              <Link to="/"><img src={home} alt=""/></Link>
            </li>
            <li>
            <Link to="/explore"><img src={compass} alt=""/></Link>
            </li>
            <li>
              <Link to="/profile"><img src={user} alt=""/></Link>
            </li>
          </ul>
        </nav>
      }
      </header>
    )
  }
}


export default Header;