import React from 'react';
import PropTypes from 'prop-types';

/**
* @name Select
* @summary Returns a label and a select
* @returns Returns a label and a select
*/
const Select = ({
  id,
  title,
  name,
  value,
  placeholder,
  options,
  handleChange,
}) => (
  <div>
    { /* eslint-disable */}
    <label className='label' htmlFor={name}>{title}</label>
    { /* eslint-disable  enable*/}
    <select
      name={name}
      className='value'
      onChange={handleChange}
      value={value}
    >

      <option value={''}>{(id && value) || placeholder}</option>
      {options.map(opt =>
        (
          <option
            key={opt.id}
            value={opt.id}
          >{opt.name}
          </option>
        ))
      }
    </select>
  </div>
  );
/**
 * @name propTypes
 * @type {PropType}
 * @param {Object} propTypes - React PropTypes
 * @property {String} name - The name of the select element
 * @property {String} title - The title of the label
 * @property {String} option - string to be shown in the dropdown
 * @property {String} selectedOption - The initial selected value
 * @property {placeholde} selectedOption - plalace holder text
 * @property {String} value - selected option
 */
Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
};
export default Select;
