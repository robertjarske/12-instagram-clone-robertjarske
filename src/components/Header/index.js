import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => (
    <header className="App-header">
      <h1 className="App-header__logo">
        InstaGrm
      </h1>
      <nav>
        <ul className="App-header__nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
)


export default Header;