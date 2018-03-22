import React from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { App } from '../components';

import rootReducer from '../reducers/index';


const middleware = [ thunk ];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);



const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
  

export default Root;
