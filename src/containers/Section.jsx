import React from 'react';
import PropTypes from 'prop-types';

const renderFields = data => (
  Object.keys(data).map(key => (
    typeof data[key] !== 'object'
      ? (
        <div
          key={key}
        >
          {key}
          :
          {data[key]}
        </div>
      )
      : null
  ))
);

const renderDetails = sectionDetail => (
  sectionDetail.map(
    detail => (renderFields(detail)),
  )
);

const Section = (props) => {
  const { sectionName, sectionDetails } = props;
  return (
    <div>
      <span>{sectionName}</span>
      {renderDetails(sectionDetails)}
    </div>
  );
};

Section.propTypes = {
  sectionName: PropTypes.string.isRequired,
  sectionDetails: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Section;
