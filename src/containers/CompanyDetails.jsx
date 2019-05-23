import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { fetchCompanyDetails } from '../actions/fetchCompanyDetails';

import { getEntry, getEntryRequesting } from '../selectors';
import Section from './Section';


class CompanyDetails extends Component {
  static propTypes = {
    fetchSingleCompanyDetails: PropTypes.func,
    match: PropTypes.shape({
      isExact: PropTypes.bool,
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
      path: PropTypes.string,
      url: PropTypes.string,
    }).isRequired,
    entry: PropTypes.shape({}),
    requesting: PropTypes.bool,
  }

  static defaultProps = {
    fetchSingleCompanyDetails: () => {},
    entry: {},
    requesting: true,
  }

  componentWillMount() {
    const { fetchSingleCompanyDetails, match } = this.props;
    fetchSingleCompanyDetails(match.params.id);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  createSections = item => (
    Object.keys(item).map(obj => (
      <Section
        key={obj}
        sectionName={obj}
        sectionDetails={item[obj]}
      />
    ))
  );

  render() {
    const { requesting, entry } = this.props;
    return (
      <div
        className='card'
      >
        {requesting && <div>Loading</div>}
        {this.createSections(entry)}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  entry: getEntry,
  requesting: getEntryRequesting,
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchSingleCompanyDetails: () => dispatch(fetchCompanyDetails(props.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);
