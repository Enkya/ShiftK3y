import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { fetchCompanyDetails } from '../actions/fetchCompanyDetails';

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
    const { fetchSingleCompanyDetails, match } = this.props;
    fetchSingleCompanyDetails(match.params.id);
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

const mapDispatchToProps = (dispatch, props) => ({
  fetchSingleCompanyDetails: () => dispatch(fetchCompanyDetails(props.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);
