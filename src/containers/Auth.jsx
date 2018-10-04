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

    handleClick = () => {
      authContext().login();
    }

    render() {
      const { signInError } = this.state;
      return (
        <Fragment>
          <header className='signInHeader'>
            <div className='signInPageContent'>
              <div className='logo'>
                {/* <img className='logo__img' src={logo} alt='UCC logo' /> */}
                {/* <span className='logo__text'>UCC</span> */}
              </div>
              <button
                type='button'
                className='signInButton'
                aria-label='Sign in with your microsoft or google account'
                onClick={this.handleClick}
              >
                <div className='signInButton__logo' />
                <span>
                  Sign in with your Microsoft or Google account
                </span>
              </button>
            </div>
          </header>
          <main className='signInPageContent signInPageContent--topAlignment'>
            <div className='signInPageLeftContent'>
              <p className='promo'>
                {'Track application compliance reports.'}
              </p>
              {
                signInError
                  ? (
                    <span className='signInError'>
                      <span className='signInError__message'>You must sign in with an Andela account</span>
                    </span>
                  )
                  : null
              }
            </div>
            <div className='signInPageRightContent'>
              <h1 className='featuresTitle'>Features</h1>
              <div className='features'>
                <div className='feature'>
                  <div className='feature__icon' />
                  <div className='feature__info'>
                    <h2 className='feature__name'>Log appliance report information</h2>
                    <p className='feature__description'>
                      Say goodbye to using spreadsheets for logging appliance data.
                    </p>
                  </div>
                </div>
                <div className='feature'>
                  <div className='feature__icon' />
                  <div className='feature__info'>
                    <h2 className='feature__name'>Track compliance</h2>
                    <p className='feature__description'>
                      Easily sift through hundreds of records to find necessary information
                    </p>
                  </div>
                </div>
                <div className='feature'>
                  <div className='feature__icon' />
                  <div className='feature__info'>
                    <h2 className='feature__name'>Report Generation</h2>
                    <p className='feature__description'>
                      Generate PDF reports from the data you upload
                    </p>
                  </div>
                </div>
                <div className='feature'>
                  <div className='feature__icon' />
                  <div className='feature__info'>
                    <h2 className='feature__name'>Email Notifications</h2>
                    <p className='feature__description'>
                      Get notified when a record you are associated with gets updated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Fragment>
      );
    }
}

export default withRouter(Auth);
