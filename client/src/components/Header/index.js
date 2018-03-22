import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import home from './home.svg';
import instagram from './instagram.svg'
import compass from './compass.svg'
import user from './user.svg'
import power from './power.svg';
import { userLogout } from '../../actions/auth';
import './style.css';

const mapDispatchToProps = dispatch => {
  return {
    userLogout: user => dispatch(userLogout())
  };
};

class ConnectedHeader extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    }

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }

  handleLogout(e) {
    this.props.userLogout();
    //logout the user by removing localstorage
    //update store
  }

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
            <li><img className="logout" src={power} alt="" onClick={this.handleLogout}/></li>
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
            <li>
              <img className="logout" src={power} alt="" onClick={this.handleLogout}/>
            </li>
          </ul>
        </nav>
      }
      </header>
    )
  }
}

const Header = connect(null, mapDispatchToProps)(ConnectedHeader);

export default Header;

