'use-strict';
/*******************************************************
* WEB - SRC - COMPONENTS - SYSTEM - PRIVATEROUTE.JS
*******************************************************/

import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('token') ? <Component {...props} /> : <Redirect to="/investor/signin" />
  )} />
)

export default PrivateRoute;
