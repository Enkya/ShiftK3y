import React from 'react';

// icons
import SearchIcon from '../icons/Search';

// logo
import logo from '../../assets/images/ucclogo.png';

const TopNav = () => (
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
          <div className='search-input'>
            <SearchIcon />
            <input
              type='text'
              className='search-text'
              autoComplete='off'
              aria-label='search'
              aria-autocomplete='list'
              aria-haspopup='true'
              placeholder='Search for something...'
              onClick={() => {}}
              maxLength='512'
            />
          </div>
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
);

export default TopNav;
