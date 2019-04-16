import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { createEntry } from '../../actions/createEntryActions';
import IS_NOT_READY from '../../helpers/release';
// import {
//   BANDS,
//   SERVICES_AUTHORIZED,
//   CHOICES,
//   STATUSES,
//   EQUIPMENT_CATEGORIES,
// } from '../../constants/categories';

// import Select from '../../common/Select';
// import TextArea from '../../common/TextArea';

import { getMessage } from '../../selectors';


class RecordForm extends Component {
  static propTypes = {
    addEntry: PropTypes.func,
    message: PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
    }),
  }

  static defaultProps = {
    addEntry: () => {},
    message: {
      type: '',
      text: '',
    },
  }

  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  componentWillMount() {
    this.resetState();
  }

  /**
   * @function componentDidUpdate
   * @summary clears state if last request successfull
   * @param {Object} prevProps
   */
  componentDidUpdate(prevProps) {
    const { message } = prevProps;
    const { message: newMessage } = this.props;
    if (message.type !== newMessage.type && newMessage.type === 'success') {
      this.resetState();
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  resetState = () => {
    this.setState({
      name: '',
      district: '',
      postal: '',
      country: '',
      techPersonName: '',
      techPersonEmail: '',
      address1: '',
      address2: '',
      legalPersonName: '',
      legalPersonEmail: '',
      // operationBand: '',
      // applicableServiceType: '',
      // serviceAuthorized: '',
      // modulationPermitted: '',
      // transPower: '',
      // antennaeGain: '',
      // antennaeHeight: '',
      // transmitLocation: '',
      // stlFrequency: '',
      // stlPower: '',
      // stlLocation: '',
      // txAssignDate: '',
      // stlAssignDate: '',
      // assignedByFirstName: '',
      // assignedByLastName: '',
      // authorizedByFirstName: '',
      // authorizedByLastName: '',
      // spectrumFullReport: {},
      // status: '',
      // TAUniqueID: '',
      // approveRejectDate: '',
      // equipmentCategory: '',
      // equipmentName: '',
      // equipmentModel: '',
      // equipmentDesc: '',
      // applicableStandards: '',
      // applicantName: '',
      // applicantAddressLine1: '',
      // applicantAddressLine2: '',
      // applicantCity: '',
      // applicantState: '',
      // applicantPostal: '',
      // applicantCountry: '',
      // typeApprovalFullReport: {},
      // taCertificate: {},
      // assessedByFirstName: '',
      // assessedByLastName: '',
    });
  }

  handleAddEvent = () => {
    const {
      name,
      district,
      postal,
      country,
      techPersonName,
      techPersonEmail,
      address1,
      address2,
      legalPersonName,
      legalPersonEmail,
      // operationBand,
      // applicableServiceType,
      // serviceAuthorized,
      // modulationPermitted,
      // transPower,
      // antennaeGain,
      // antennaeHeight,
      // transmitLocation,
      // stlFrequency,
      // stlPower,
      // stlLocation,
      // txAssignDate,
      // stlAssignDate,
      // assignedByFirstName,
      // assignedByLastName,
      // authorizedByFirstName,
      // authorizedByLastName,
      // spectrumFullReport,
      // status,
      // TAUniqueID,
      // approveRejectDate,
      // equipmentCategory,
      // equipmentName,
      // equipmentModel,
      // equipmentDesc,
      // applicableStandards,
      // applicantName,
      // applicantAddressLine1,
      // applicantAddressLine2,
      // applicantCity,
      // applicantState,
      // applicantPostal,
      // applicantCountry,
      // typeApprovalFullReport,
      // taCertificate,
      // assessedByFirstName,
      // assessedByLastName,
      // serviceCategory,
    } = this.state;
    const entry = {
      name,
      district,
      postal,
      country,
      techPersonName,
      techPersonEmail,
      address1,
      address2,
      legalPersonName,
      legalPersonEmail,
      // operationBand,
      // applicableServiceType,
      // serviceAuthorized,
      // modulationPermitted,
      // transPower,
      // antennaeGain,
      // antennaeHeight,
      // transmitLocation,
      // stlFrequency,
      // stlPower,
      // stlLocation,
      // txAssignDate,
      // stlAssignDate,
      // assignedByFirstName,
      // assignedByLastName,
      // authorizedByFirstName,
      // authorizedByLastName,
      // spectrumFullReport,
      // status,
      // approveRejectDate,
      // TAUniqueID,
      // equipmentCategory,
      // equipmentName,
      // equipmentModel,
      // equipmentDesc,
      // applicableStandards,
      // applicantName,
      // applicantAddressLine1,
      // applicantAddressLine2,
      // applicantCity,
      // applicantState,
      // applicantPostal,
      // applicantCountry,
      // typeApprovalFullReport,
      // taCertificate,
      // assessedByFirstName,
      // assessedByLastName,
      // serviceCategory,
    };
    const { addEntry } = this.props;
    addEntry(entry);
  }

  render() {
    // TODO: Destructure state automatically with a loop
    const {
      name,
      district,
      postal,
      country,
      techPersonName,
      techPersonEmail,
      address1,
      address2,
      legalPersonName,
      legalPersonEmail,
      // operationBand,
      // applicableServiceType,
      // serviceAuthorized,
      // modulationPermitted,
      // transPower,
      // antennaeGain,
      // antennaeHeight,
      // transmitLocation,
      // stlFrequency,
      // stlPower,
      // stlLocation,
      // txAssignDate,
      // stlAssignDate,
      // assignedByFirstName,
      // assignedByLastName,
      // authorizedByFirstName,
      // authorizedByLastName,
      // spectrumFullReport,
      // status,
      // approveRejectDate,
      // TAUniqueID,
      // equipmentCategory,
      // equipmentName,
      // equipmentModel,
      // equipmentDesc,
      // applicableStandards,
      // applicantName,
      // applicantAddressLine1,
      // applicantAddressLine2,
      // applicantCity,
      // applicantState,
      // applicantPostal,
      // applicantCountry,
      // typeApprovalFullReport,
      // taCertificate,
      // assessedByFirstName,
      // assessedByLastName,
      // serviceCategory,
    } = this.state;
    // TODO: Import datasets from somewhere else
    // TODO: Work on Edit Feature
    const edit = !IS_NOT_READY('edit') && <button type='button' className='edit'>Edit</button>;

    return (
      <form className='form-container'>
        <div className='actions'>
          { edit }
          <button type='button' onClick={this.handleAddEvent} className='save'>Save</button>
        </div>
        <div className='sections'>
          <div className='company section'>
            <div className='title'>
              <span>Company Details</span>
            </div>
            <div className='details'>
              <div className='name'>
                <label className='label' htmlFor='name'>
                  Name
                  <input
                    type='text'
                    className='value'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className='location'>
                <div className='section-header'>Location</div>
                <div className='district'>
                  <label className='label' htmlFor='district'>
                    District
                    <input
                      className='value'
                      type='text'
                      name='district'
                      value={district}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className='postal'>
                  <label className='label' htmlFor='postal'>
                    Postal
                    <input
                      id='postal'
                      className='value'
                      name='postal'
                      type='number'
                      value={postal}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className='country'>
                  <label className='label' htmlFor='country'>
                    Country
                    <input
                      id='country'
                      className='value'
                      type='text'
                      name='country'
                      value={country}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
              </div>
              <div className='technical_contact'>
                <div className='section-header'>Technical Contact Person</div>
                <div className='tech_name'>
                  <label className='label' htmlFor='techPersonName'>
                    Name
                    <input
                      type='text'
                      className='value'
                      name='techPersonName'
                      value={techPersonName}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className='tech_person_email'>
                  <label className='label' htmlFor='techPersonEmail'>
                    Email
                    <input
                      type='email'
                      className='value'
                      name='techPersonEmail'
                      value={techPersonEmail}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
              </div>
              <div className='address'>
                <div className='section-header'>Address</div>
                <div className='address1'>
                  <label className='label' htmlFor='address1'>
                    Address Line 1
                    <input
                      name='address1'
                      className='value'
                      type='text'
                      value={address1}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className='address2'>
                  <label className='label' htmlFor='address2'>
                    Address Line 2
                    <input
                      name='address2'
                      className='value'
                      type='text'
                      value={address2}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
              </div>
              <div className='legal_contact'>
                <div className='section-header'>Legal Contact Person</div>
                <div className='legal_name'>
                  <label className='label' htmlFor='legalPersonName'>
                    Name
                    <input
                      type='text'
                      className='value'
                      name='legalPersonName'
                      value={legalPersonName}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className='legal_email'>
                  <label className='label' htmlFor='legalPersonEmail'>
                    Email
                    <input
                      type='email'
                      className='value'
                      name='legalPersonEmail'
                      value={legalPersonEmail}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  message: getMessage,
});

const mapDispatchToProps = dispatch => ({
  addEntry: (entry) => {
    dispatch(createEntry(entry));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecordForm);
