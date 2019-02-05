import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './Auth';
import NotFoundPage from './NotFound';

import Home from './Home';

/**
 * @name Router
 * @summary Renders the application routes
 * @return {jsx} React node for the application routes
 */
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/signin' exact component={Auth} />
      <Route path='/' component={Home} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>);

export default connect()(Router);
