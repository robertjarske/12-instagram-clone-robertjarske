import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';


class SignInForm extends Component {

  handleSubmit(e) {
    debugger;
    e.preventDefault;
    const email = e.target.email.value;
    const password = e.target.password.value;
  }

  render(){
    return (
      <section className="App-signin">
        <div className="signForm">
        <h3>Sign In</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" placeholder="Email"/>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" placeholder="Password"/>
          <button type="submit" onSubmit={this.handleSubmit.bind(this)}>Submit</button>
        </form>
        </div>

        <h3>No account? Go to <Link to="/signup">sign up</Link></h3>
          
      </section>
  )}
}

export default SignInForm;