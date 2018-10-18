import React from 'react';
import PropTypes from 'prop-types';

/**
   * @name Button
   * @summary Returns a button
   * @returns Returns a button
   */
const Button = (props) => {
  const {
    name, className, value, disabled, onClick, ariaLabel,
  } = props;
  return (
    <button
      name={name}
      className={className}
      value={value}
      type='button'
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      { value }
    </button>
  );
};
/**
 * @name defaultProps
 * @type {PropType}
 * @property {String} type -button type
 */
Button.defaultProps = {
  disabled: false,
  ariaLabel: '',
};
/**
 * @name propTypes
 * @type {PropType}
 * @param {Object} propTypes - React PropTypes
 * @property {String} name - The name of the Button
 * @property {String} className - The ClassName of the button for syling
 * @property {String} value - The name to show in the button
 */
Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default Button;
