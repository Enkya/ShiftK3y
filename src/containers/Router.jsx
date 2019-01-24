import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Auth from './Auth';
import NotFoundPage from './NotFound';

import makeSelectUserProfile from '../selectors';
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

const mapStateToProps = createStructuredSelector({
  profile: makeSelectUserProfile(),
});

Router.propTypes = {
  profile: PropTypes.shape({}),
};

Router.defaultProps = {
  profile: {},
};

export default connect(mapStateToProps)(Router);
