import React from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { App } from '../components';

import rootReducer from '../reducers';

const middleware = [ thunk ];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

// import { Home, Profile, Explore, SignUp, SignIn, NotFoundPage } from '../views';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>
      // <Switch>
      //   <Route exact path="/" component={Home} />
      //   <Route path="/profile" component={Profile} />
      //   <Route path="/explore" component={Explore} />
      //   <Route path="/signup" component={SignUp} />
      //   <Route path="/signin" component={SignIn} />
      //   <Route component={NotFoundPage} />
        
      // </Switch>
    
  )
}
  

export default Root;
