import React, { Component } from 'react';

// third party libraries
import PropType from 'prop-types';

/**
 * @summary Renders text
 * @class TruncateText
 * @extends React.Component
 */
class TruncateText extends Component {
  /**
   * @name propTypes
   * @type {PropType}
   * @param {String} text - The text to shorten
   */
  static propTypes = {
    text: PropType.string.isRequired,
    wordCount: PropType.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      longText: true,
    };
  }

  /**
   * @name TruncateText
   * @summary Shortens the text passed as a param
   * @param {String} text - text to be shortened
   * @param {Boolean} isLong - boolean value indicate if text is long
   * @return {String} desc
   */
  truncateText = (text, isLong) => {
    const { wordCount } = this.props;
    if (text.trim().length > wordCount && isLong) {
      const shortText = text.slice(0, wordCount + 1).concat('...');
      return shortText;
    }
    return text;
  }

  /**
   * @name handleViewMoreLessClick
   * @summary Handles showing of more or less text
   * @return {void}
   */
  handleViewMoreLessClick = () => {
    const { longDescription } = this.state;
    this.setState({ longDescription: !longDescription });
  }

  render() {
    const { longText } = this.state;
    const { text, wordCount } = this.props;
    let buttonHtml = null;
    if (text.trim().length > wordCount) {
      buttonHtml = (
        <button type='button' className='text__btn--more--less' onClick={this.handleViewMoreLessClick}>
          {longText ? 'More' : 'Less'}
        </button>
      );
    }
    return (
      <p className='text'>
        {this.truncateDescription(text, longText)}
        {buttonHtml}
      </p>
    );
  }
}

export default TruncateText;
