import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchEntries } from '../actions/fetchEntriesActions';

import EntriesLoader from '../components/loaders/EntriesLoader';
import LinearView from './LinearView';
import { getEntries, getEntriesRequesting } from '../selectors';

/**
 * @name Entries
 * @summary renders Entries component
 * @extends React.component
 */
class Entries extends Component {
  static propTypes = {
    fetchItems: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape({})),
    requesting: PropTypes.bool,
  }

  static defaultProps = {
    fetchItems: () => {},
    items: [],
    requesting: false,
  }

  componentWillMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    const { items, requesting } = this.props;
    const entriesHTML = requesting
      ? <EntriesLoader />
      : <LinearView items={items} />;
    return (entriesHTML);
  }
}

const mapStateToProps = createStructuredSelector({
  items: getEntries,
  requesting: getEntriesRequesting,
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchEntries()),
});
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Entries);
