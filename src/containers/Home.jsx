import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';

import ContentHeader from '../components/headers/ContentHeader';
import TopNav from '../components/headers/TopNav';
import PersonalActions from '../components/sidebar/PersonalActions';
import LinearView from './LinearView';
// import RecordForm from './forms/RecordsForm';

/**
 * @name Dashboard
 * @summary renders Home component
 * @extends React.component
 */
class Home extends Component {
  static propTypes = {
    fetchItems: PropTypes.func,
  }

  static defaultProps = {
    fetchItems: () => {},
  }

  componentWillMount() {
    const { fetchItems } = this.props;
  }

  render() {
    return (
      <div className='container flex-col'>
        <div className='flex-row grow'>
          <div className='clipping' />
          <aside className='sidenav' />
          <main className='dash-container'>
            <TopNav />
            <div className='content'>
              <ContentHeader />
              <article className='renderview'>
                <div className='linear-view'>
                  {/* <div className='card data'>
                    <RecordForm />
                  </div> */}
                  <LinearView />
                  <div className='loader' />
                </div>
              </article>
              <PersonalActions />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.items });

// export default withRouter(Home);
export default connect(mapStateToProps, actions)(Home);
