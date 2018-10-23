import React from 'react';
import { withRouter } from 'react-router-dom';

// common
import Button from '../common/Button';

// icons
import ClearSearchIcon from '../components/icons/ClearSearch';
import CloseSearchIcon from '../components/icons/CloseSearch';
import SearchIcon from '../components/icons/Search';

// logo
import logo from '../assets/images/ucclogo.png';

/**
 * @name Dashboard
 * @summary renders Home component
 * @extends React.component
 */

const Home = () => (
  <div className='container flex-col'>
    <div className='flex-row'>
      <div className='clipping' />
      <aside className='sidenav' />
      <main className='dash-container'>
        <div className='top-nav'>
          <div className='logo left'>
            <div className='logo-wrapper'>
              <div className='hamburger' />
              <div className='logo-image'><img src={logo} alt='logo' /></div>
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
                <div className='search-input'>
                  <input
                    type='text'
                    className='search-text avoid-clicks'
                    value='Search for companies, licenses and categories avoid-clicks'
                    disabled
                    aria-hidden
                    onClick={() => {}}
                  />
                  <input
                    type='text'
                    className='search-text'
                    autoComplete='off'
                    aria-label='search'
                    aria-autocomplete='list'
                    aria-haspopup='true'
                    onClick={() => {}}
                  />
                </div>
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
                <span>Hi, Muheki</span>
              </div>
              <div className='dropdown-icon' />
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='content__header row-wrapper'>
            <div className='page__title'>
              Licensing
            </div>
            <div className='sorter sub'>
              <div className='toggle btn__small'>Order By</div>
              <div className='toggle btn__small'>Status</div>
              <div className='toggle btn__small'>Category</div>
            </div>
            <div className='entrycounter sub'>
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
              <Button
                name='Create'
                aria-label='Create button'
                value='Create'
                className='btn__large blue'
                onClick={() => {}}
              />
            </div>
          </div>
          <div className='renderview'>
            <div className='linear-view'>
              <div className='card active'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
              <div className='card'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
              <div className='card'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
              <div className='card'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
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
  </div>
);

export default withRouter(Home);
