import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from '../';
import {
  Home,
  Profile,
  Explore,
  SignIn,
  SignUp,
  NotFoundPage
} from '../../views';
import './style.css';


const App = (children) => (
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
)

export default App;
