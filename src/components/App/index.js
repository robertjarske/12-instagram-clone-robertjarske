import React, { Component } from 'react';
import { Header, Footer } from '../';
import { Root } from '../../containers';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Root />
      <Footer/>
      </div>
    );
  }
}

export default App;
