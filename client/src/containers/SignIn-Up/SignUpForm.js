import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestSignup } from '../../actions/auth';
import './auth.css';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      btnDisabled: true,
      redirect: this.props.user.isLoggedIn
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestSignup({
      name: this.state.name,
      username: this.state.username, 
      email: this.state.email,
      password: this.state.password
    });
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
    
    if (this.state.email.length > 0 && this.state.password.length > 0 ) {
      this.setState({btnDisabled: false});
    } else if (this.state.email.length === 0 || this.state.password.length === 0 ){
      this.setState({btnDisabled: true});
    }
  }

  render(){
    if (this.state.redirect) {
      return <Redirect push to="/profile" />;
    }
    return (
      <section className="App-signup">
      <div className="signForm">
      <h3>Signup</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <label htmlFor="name">Name</label>
        <input name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
        <label htmlFor="email">Email</label>
        <input name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
        { this.state.btnDisabled ?
          <button className="btn-disabled" type="submit" disabled>Submit</button>
          :
          <button className="btn-enabled" type="submit">Submit</button>
        }
      </form>
      </div>
      <h3>Already have an account? Go to <Link to="/signin">signin</Link></h3>
      </section>
  )}
}

const mapDispatchToProps = { requestSignup };

const mapStateToProps = state => {
  return { user: state.authReducer.user };
};

const SignUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUp);


export default SignUpForm;