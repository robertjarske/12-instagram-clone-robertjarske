import React from 'react';
import { render } from 'react-dom';
import { Root } from './containers';

// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "react-redux";
// import store from './store';
// import { App } from './components';
import registerServiceWorker from './registerServiceWorker';

render(
  <Root />
  // <BrowserRouter>
  // <Provider store={store}>
  //   <App />
  // </Provider>
  // </BrowserRouter>
  ,
  document.getElementById('root')
)

registerServiceWorker();
