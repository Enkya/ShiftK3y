import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ErrorMessage from '../common/ErrorMessage';


class LinearView extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
  };

  createItems = items => (
    items.map(item => (
      <div
        className='card'
        key={item.id}
        onClick={this.renderPreview}
        onKeyPress={this.onKeyPressHandler}
        role='button'
        tabIndex='0'
      >
        <div className='avatar'>
          <div className='user__image' />
        </div>
        <div className='summary'>
          <div className='name'>
            <Link
              to={{
                pathname: `/companies/${item.id}`,
              }}
            >
              {item.name}
            </Link>
          </div>
          <div className='category'>
            {item.location}
          </div>
          <div className='services'>
            {item.postal}
          </div>
          <div className='status'>
            {item.country}
          </div>
          <div className='resource'>
            {item.tech_person_name}
          </div>
        </div>
      </div>
    ))
  );

  renderPreview = (event) => {
    event.preventDefault();
    console.log(event);
    console.log('test');
  };

  onKeyPressHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    const { items } = this.props;
    let LinearViewHtml = '';
    if (items.length) {
      LinearViewHtml = (
        <div className='linear-view'>
          {this.createItems(items)}
        </div>
      );
    } else {
      LinearViewHtml = (<ErrorMessage message='There are no resources at the moment' />);
    }
    return LinearViewHtml;
  }
}

export default LinearView;
