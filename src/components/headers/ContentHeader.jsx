import React from 'react';

import Button from '../../common/Button';

const ContentHeader = () => (
  <div className='content__header row-wrapper'>
    <div className='page__title'>
      Category
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
      <Button
        name='Create'
        aria-label='Create button'
        value='Create'
        className='btn__large blue'
        onClick={() => {}}
      />
    </div>
  </div>
);

export default ContentHeader;
