import React from 'react';
import { withRouter } from 'react-router-dom';

// common
import Button from '../common/Button';

// icons
import ClearSearchIcon from '../components/icons/ClearSearch';
import CloseSearchIcon from '../components/icons/CloseSearch';
import SearchIcon from '../components/icons/Search';

/**
 * @name Dashboard
 * @summary renders Home component
 * @extends React.component
 */

const Home = () => (
  <div className='container'>
    <aside>
      side content
    </aside>
    <main className='dash-container'>
      <div className='top-nav'>
        <div className='col-wrapper'>
          <div className='logo left'>
            <div className='row-wrapper'>
              <div className='logo-wrapper'>
                <div className='hamburger' />
                <div className='logo-image' />
              </div>
            </div>
          </div>
          <div className='search'>
            <div className='search-bar'>
              <form className='form'>
                <Button
                  name='closeSearch'
                  aria-label='Close Search'
                  value={<CloseSearchIcon />}
                  className='icon close-search'
                  onClick={() => {}}
                />
                <input
                  type='text'
                  className='search-input'
                  autoComplete='off'
                  aria-label='search'
                  aria-autocomplete='list'
                  aria-haspopup='true'
                  onClick={() => {}}
                />
                <Button
                  name='clearSearch'
                  aria-label='Clear Search'
                  value={<ClearSearchIcon />}
                  className='icon clear-search'
                  onClick={() => {}}
                />
                <Button
                  name='Search'
                  aria-label='Search button'
                  value={<SearchIcon />}
                  className='icon search'
                  onClick={() => {}}
                />
              </form>
            </div>
          </div>
          <div className='control right'>
            <div className='controls'>
              <div className='notifications' />
              <div className='username'>
                <span>Hello, Muheki</span>
              </div>
              <div className='dropdown-icon' />
            </div>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='content__header'>
          <div className='page__title'>
            <h2>
              Licensing
            </h2>
          </div>
          <div className='sorter'>
            <div className='toggle btn__small'>Category</div>
            <div className='toggle btn__small'>Status</div>
            <div className='toggle btn__small'>Order By</div>
          </div>
          <div className='entrycounter'>
            <span>Showing</span>
            <div className='entrycounter__selector'>
              <a href='/' className='dropdown'>
                <span className='entry__number'>25</span>
                <div className='icon__small'>
                  <span className='icon down' />
                </div>
              </a>
            </div>
            <div>of</div>
            <span className='entry__number'>3000</span>
            <span>entries</span>
          </div>
          <div className='viewmode__icons'>
            <div className='gridview icon' />
            <div className='listview icon' />
          </div>
          <div className='cta'>
            <div className='btn__large blue' />
          </div>
        </div>
        <div className='renderview'>
          <div className='linear-view'>
            <div className='card'>
              <div className='avatar'>
                <div className='user__image' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default withRouter(Home);
