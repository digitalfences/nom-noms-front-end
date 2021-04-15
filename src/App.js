import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Onboarding from "./Onboarding/index.js";
import Home from './Home/index.js';
/*
App starts on splash page if a user isn't logged in. 
Splash page allows for logging in or registering.
If registering is selected, component swaps out.
*/
function App() {
  return (<div className="app">
  <Route
    path="/home"
    exact
    render={routerProps=> (
      <Home></Home>
    )}
  ></Route>
  <Route
    path="/"
    exact
    render={routerProps=> (
      <Onboarding>

      </Onboarding>
    )}>

  </Route>
  </div>
  )
}

export default App;
