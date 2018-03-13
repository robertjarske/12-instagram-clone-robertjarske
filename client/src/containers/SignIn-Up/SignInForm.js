import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { requestLogin } from '../../actions/auth';
import { connect } from 'react-redux';
import './auth.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      btnDisabled: true,
      redirect: this.props.user.isLoggedIn
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.requestLogin({email: this.state.email, password: this.state.password});
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
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
      <section className="App-signin">
        <div className="signForm">
        <h3>Sign In</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
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

        <h3>No account? Go to <Link to="/signup">sign up</Link></h3>
          
      </section>
  )}
}

const mapDispatchToProps = { requestLogin };

const mapStateToProps = state => {
  return { user: state.authReducer.user };
};

const SignInForm = connect(mapStateToProps, mapDispatchToProps)(Login);

export default SignInForm;