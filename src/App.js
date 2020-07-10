import React from 'react';
import './App.css';
import { Route, Switch, Router } from 'react-router';

import Home from "./home.js"

function App() {
  return (
    <div className="Header">
      <Router>
        <div className="main-navbar">
          <Switch>
            <hi>Hello World</hi>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <div className="bottom-footer"></div>
      </Router>
    </div>
  );
}

export default App;
