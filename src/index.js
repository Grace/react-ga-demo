import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import withTracker from './withTracker';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
      <Route component={withTracker(App, { /* additional attributes */ } )} />
    </BrowserRouter>,
  document.getElementById('root'));

// registerServiceWorker();
