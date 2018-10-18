import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// import logo from '../assets/images/ucclogo.png';
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

    componentWillMount() {
      const { history } = this.props;
      const user = authContext().getCachedUser();
      if (user) {
        history.push('/dashboard');
      }
    }

    handleClick = () => {
      authContext().login();
    }

    render() {
      const { signInError } = this.state;
      return (
        <Fragment>
          <div className='brand-box'>
            <div className='logo'>
              {/* <img className='logo__img' src={logo} alt='UCC logo' /> */}
            </div>
          </div>
          <header className='header'>
            <div className='text-box'>
              <h1 className='heading-primary'>
                <span className='heading-primary-main'>IMS</span>
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
              }
            </div>
            <ul className='bg-bubbles'>
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </header>
        </Fragment>
      );
    }
}

export default withRouter(Auth);
