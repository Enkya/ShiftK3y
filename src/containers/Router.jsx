import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Auth from '../containers/Auth';

/**
 * @name Router
 * @summary Renders the application routes
 * @return {jsx} React node for the application routes
 */
const Router = ({profile}) => {
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Auth} />
        </Switch>
    </BrowserRouter>
};


export default Router;
