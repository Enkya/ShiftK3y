import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Auth from './Auth';
import NotFoundPage from './NotFound';
import pageInfo from '../helpers/pageInfo';
import PrivateRoute from '../components/routes/PrivateRoute';

import { makeSelectUserProfile } from '../selectors';

const pages = [...pageInfo.pages];

/**
 * @name Router
 * @summary Renders the application routes
 * @return {jsx} React node for the application routes
 */
const Router = ({ profile }) => (
  <BrowserRouter>
    <Switch>
      <Route path='/signin' exact component={Auth} />
      <Route component={NotFoundPage} />
      {
        pages.map(pageInfoData => (
          pageInfoData.allowedRoles
            ? (
              <PrivateRoute
                path={pageInfoData.url}
                exact
                component={pageInfoData.component}
                key={pageInfoData.title}
                allowedRoles={pageInfoData.allowedRoles}
                userRoles={profile && profile.get('roles')}
              />
            )
            : (
              <Route
                path={pageInfoData.url}
                exact
                component={pageInfoData.component}
                key={pageInfoData.title}
              />
            )
        ))
      }
    </Switch>
  </BrowserRouter>);

const mapStateToProps = createStructuredSelector({
  profile: makeSelectUserProfile(),
});

Router.propTypes = {
  profile: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps)(Router);
