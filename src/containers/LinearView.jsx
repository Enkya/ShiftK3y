import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../common/ErrorMessage';

const createItems = items => (
  items.map(item => (
    <div className='card'>
      <div className='avatar'>
        <div className='user__image' />
      </div>
      {item}
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
