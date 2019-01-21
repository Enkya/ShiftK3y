import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../common/ErrorMessage';

const createItems = items => (
  items.map(item => (
    <div className='card' key={item.id}>
      <div className='avatar'>
        <div className='user__image' />
      </div>
      <div className='summary'>
        <div className='name'>
          {item.company}
        </div>
        <div className='category'>
          {item.category}
        </div>
        <div className='services'>
          {item.services}
        </div>
        <div className='status'>
          {item.status}
        </div>
        <div className='resource'>
          {item.resource}
        </div>
        <div className='report'>
          <a href={item.report}>Download</a>
        </div>
      </div>
    </div>
  ))
);

const LinearView = ({ items }) => {
  let LinearViewHtml = '';
  if (items.length) {
    LinearViewHtml = (
      <div className='linear-view'>
        {createItems(items)}
      </div>
    );
  } else {
    LinearViewHtml = (<ErrorMessage message='There are no resources at the moment' />);
  }
  return LinearViewHtml;
};

LinearView.defaultProps = {
  items: [],
};

LinearView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default LinearView;
