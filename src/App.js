import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClickableComponent from './ClickableComponent'
import ViewComponent from './ViewComponent'
import withTracker from './withTracker';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Implementing Google Analytics in React</h1>
        </header>
        <br/>
        <ClickableComponent />
        <Route path="/view-component" component={withTracker(ViewComponent)} />
      </div>
    );
  }
}

export default App;
