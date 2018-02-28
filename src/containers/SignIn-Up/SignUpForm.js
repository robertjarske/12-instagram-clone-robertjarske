import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';


class SignUpForm extends Component {

  handleSubmit(e) {
    e.preventDefault;
    const email = e.target.email.value;
    const password = e.target.password.value;
  }

  render(){
    return (
      <section className="App-signup">
      <div className="signForm">
      <h3>Signup</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="email">Email</label>
        <input name="email" type="text" placeholder="Email"/>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="Password"/>
        <button type="submit" onSubmit={this.handleSubmit.bind(this)}>Submit</button>
      </form>
      </div>
      <h3>Already have an account? Go to <Link to="/signin">signin</Link></h3>
      </section>
  )}

}

export default SignUpForm;