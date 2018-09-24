import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Auth from './Auth';
// import NotFoundPage from '../containers/NotFound';

// const PAGES = {
//   '/': Auth,
// };

/**
 * @name Router
 * @summary Renders the application routes
 * @return {jsx} React node for the application routes
 */
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Auth} />
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;
