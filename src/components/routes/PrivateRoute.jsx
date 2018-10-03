import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import hasAllowedRole from '../../helpers/authentication';

/**
 * @name PrivateRoute
 * @param {Object} props - React PropTypes
 * @return Route component
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      hasAllowedRole(rest.userRoles, rest.allowedPageRoles)
        ? <Component {...props} />
        : <Redirect to='/signin' />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
