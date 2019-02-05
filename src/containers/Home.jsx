import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';

import ContentHeader from '../components/headers/ContentHeader';
import TopNav from '../components/headers/TopNav';
import PersonalActions from '../components/sidebar/PersonalActions';

import pageInfo from '../helpers/pageInfo';
import PrivateRoute from '../components/routes/PrivateRoute';

import { makeSelectUserProfile, getUpdateLoader, getMessage } from '../selectors';
import UpdateLoader from '../components/loaders/UpdateLoader';
import SnackBar from '../common/SnackBar';


const pages = [...pageInfo.pages];

const renderChildRoutes = profile => (
  pages.map(pageInfoData => (
    pageInfoData.allowedRoles
      ? (
        <PrivateRoute
          path={pageInfoData.url}
          exact
          component={pageInfoData.component}
          key={pageInfoData.title}
          allowedRoles={pageInfoData.allowedRoles}
          userRoles={profile && profile.roles}
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
);

/**
 * @name Home
 * @summary renders Home component
 * @extends React.component
 */
const Home = (props) => {
  const { updating, message } = props;
  const snackBarMessage = message ? <SnackBar message={message} /> : null;
  return (
    <div className='container flex-col'>
      { updating && <UpdateLoader /> }
      <div className='flex-row grow'>
        <div className='clipping' />
        <aside className='sidenav' />
        <main className='dash-container'>
          <TopNav />
          <div className='content'>
            <ContentHeader />
            <article className='renderview'>
              <div className='linear-view'>
                { renderChildRoutes() }
              </div>
            </article>
            <PersonalActions />
          </div>
        </main>
      </div>
      { snackBarMessage }
    </div>
  );
};

const mapStateToProps = state => ({
  profile: makeSelectUserProfile(state),
  updating: getUpdateLoader(state),
  message: getMessage(state),
});

Home.propTypes = {
  profile: PropTypes.shape({}),
  updating: PropTypes.bool,
  message: PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
  }),
};

Home.defaultProps = {
  profile: {},
  updating: false,
  message: {
    type: '',
    text: '',
  },
};

export default connect(mapStateToProps)(Home);
