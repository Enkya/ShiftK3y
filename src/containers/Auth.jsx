import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../assets/images/ucclogo.png';
import { authContext } from '../adal/adalConfig';

/**
 * @name Auth
 * @summary renders the Authentication page
 * @extends React.component
 */
class Auth extends Component {
    /**
     * @name propTypes
     * @type {PropType}
     * @param {Object} propTypes - React PropTypes
     * @property {history} items - React router history object
     */
    static propTypes = {
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
      }).isRequired,
    }

    constructor(props) {
      super(props);
      this.state = {
        signInError: false,
      };
    }

    handleClick = () => {
      authContext().login();
    }

    render() {
      const { signInError } = this.state;
      return (
        <Fragment>
          <header className='header'>
            <div className='brand-box'>
              <div className='logo'>
                <img className='logo__img' src={logo} alt='UCC logo' />
              </div>
            </div>
            <div className='text-box'>
              <h1 className='heading-primary'>
                <span className='heading-primary-main'>SHIFTK3Y</span>
                <span className='heading-primary-sub'>A UCC records management system</span>
              </h1>
              <button
                type='button'
                className='btn btn-white btn-animated'
                aria-label='Sign in with your microsoft or google account'
                onClick={this.handleClick}
              >
                <div className='signInButton__logo' />
                <span>
                  Sign in with your UCC account
                </span>
              </button>
              {
                signInError
                  ? (
                    <span className='signInError'>
                      <span className='signInError__message'>You must sign in with your UCC account</span>
                    </span>
                  )
                  : null
              }
            </div>
          </header>
        </Fragment>
      );
    }
}

export default withRouter(Auth);
