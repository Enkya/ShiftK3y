import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

/**
 * @name NotFound
 * @summary renders the NotFound page. This page displays when the specified route is not found
 * @extends React.component
 */
const NotFound = () => (<Redirect to='/signin' />);

export default withRouter(NotFound);
