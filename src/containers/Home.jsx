import React from 'react';
import { withRouter } from 'react-router-dom';

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
const Home = () => (
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

export default withRouter(Home);
