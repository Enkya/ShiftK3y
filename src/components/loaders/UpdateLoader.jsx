import React from 'react';

/**
 * @name Loader
 * @summary Renders an indeterminate progress bar during API calls to update data
 * @returns {React.Element} to display a loader
 */
const UpdateLoader = () => (
  <div className='slider'>
    <div className='line' />
    <div className='subline inc' />
    <div className='subline dec' />
  </div>
);

export default UpdateLoader;
