import React from 'react';
import { render } from 'react-dom';
/**
 * Styling and file imports
 */
import './assets/scss/style.scss';

/**
 * Redux imports
 */
// import store from './store';


/**
 * Service workers and caching imports
 */
import registerServiceWorker from './registerServiceWorker';


/**
 * Routing imports
 */
import Router from './containers/Router';

registerServiceWorker();

const mount = (Component) => {
  render(
    <Component />,
    document.getElementById('root'),
  );
};

mount(Router);
