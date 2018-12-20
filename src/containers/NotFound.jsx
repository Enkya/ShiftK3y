import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

/**
 * @name NotFound
 * @summary renders the NotFound page. This page displays when the specified route is not found
 * @extends React.component
 */
const NotFound = () => (<Redirect to='/dashboard' />);

export default withRouter(NotFound);
