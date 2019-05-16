import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { fetchDetails } from '../actions/fetchDetailsActions';

import { getMessage } from '../selectors';


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
  }

  static defaultProps = {
    fetchSingleCompanyDetails: () => {},
  }

  componentWillMount() {
    const { fetchSingleCompanyDetails } = this.props;
    fetchSingleCompanyDetails();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        {match.params.id}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  message: getMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchSingleCompanyDetails: () => dispatch(fetchDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);
