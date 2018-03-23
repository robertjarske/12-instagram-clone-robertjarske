import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Footer } from '../';
import { fetchUser, userLogout } from "../../actions/auth";
import { fetchPhotos } from '../../actions';
import {
  Home,
  Profile,
  Explore,
  SignIn,
  SignUp,
  NotFoundPage
} from '../../views';
import './style.css';


const mapStateToProps = state => {
  return { photos: state.photoReducer.photos, user: state.authReducer.user };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: token => dispatch(fetchUser(token)),
    fetchPhotos: photos => dispatch(fetchPhotos()),
    userLogout: user => dispatch(userLogout())
  };
}

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { }

    this.localStorageUpdated = this.localStorageUpdated.bind(this);
  }

  componentDidMount(){
    this.props.fetchPhotos();
   
    if (this.props.user.isLoggedIn) {
      const token = localStorage.getItem('currentUser');
      return this.props.fetchUser(token);
    }

    return;
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.localStorageUpdated)
  }

  componentWillReceiveProps() {
    window.addEventListener('storage', this.localStorageUpdated)
  }

  localStorageUpdated() {
    this.props.userLogout();
  }

  render(){
    const { user } = this.props.user;
    const { photos } = this.props.photos;
    
  return(
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/explore" component={Explore} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </React.Fragment>   
  )}
}

  

const App = connect(mapStateToProps, mapDispatchToProps)(Root);

export default App;
