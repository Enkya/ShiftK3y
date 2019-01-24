import React from 'react';
import { Link } from 'react-router-dom';

const ContentHeader = () => {
  const titleHtml = ('All Entries');
  return (
    <div className='content__header row-wrapper'>
      <div className='page__title'>
        <Link to='/'>{ titleHtml }</Link>
      </div>
      <div className='sorter sub'>
        <div className='toggle btn__small'>Status</div>
        <div className='toggle btn__small'>Resource</div>
        <div className='toggle btn__small'>Coverage</div>
        <div className='toggle btn__small'>Category</div>
        <div className='toggle btn__small'>Licensee</div>
        <div className='toggle btn__small'>Date </div>
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
        <Link
          to='/new'
          className='btn__large blue'
          aria-label='Create button'
        >
          Create
        </Link>
      </div>
    </div>
  );
};

export default ContentHeader;
