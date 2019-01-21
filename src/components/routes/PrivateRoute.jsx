import React from 'react';
import { Route, Redirect } from 'react-router-dom';

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
      hasAllowedRole(rest.get('userRoles'), rest.get('allowedPageRoles'))
        ? <Component {...props} />
        : <Redirect to='/signin' />
    )}
  />
);

export default PrivateRoute;
