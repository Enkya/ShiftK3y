import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createEntry } from '../../actions/createEntryActions';
import IS_NOT_READY from '../../helpers/release';

import Select from '../../common/Select';
import TextArea from '../../common/TextArea';

class RecordForm extends Component {
  static propTypes = {
    addEntry: PropTypes.func,
  }

  static defaultProps = {
    addEntry: () => {},
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
      operationBand: '',
      applicableServiceType: '',
      serviceAuthorized: '',
      modulationPermitted: '',
      transPower: '',
      antennaeGain: '',
      antennaeHeight: '',
      transmitLocation: '',
      stlFrequency: '',
      stlPower: '',
      stlLocation: '',
      txAssignDate: '',
      stlAssignDate: '',
      assignedByFirstName: '',
      assignedByLastName: '',
      authorizedByFirstName: '',
      authorizedByLastName: '',
      spectrumFullReport: {},
      status: '',
      TAUniqueID: '',
      approveRejectDate: '',
      equipmentCategory: '',
      equipmentName: '',
      equipmentModel: '',
      equipmentDesc: '',
      applicableStandards: '',
      applicantName: '',
      applicantAddressLine1: '',
      applicantAddressLine2: '',
      applicantCity: '',
      applicantState: '',
      applicantPostal: '',
      applicantCountry: '',
      typeApprovalFullReport: {},
      taCertificate: {},
      assessedByFirstName: '',
      assessedByLastName: '',
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
      operationBand,
      applicableServiceType,
      serviceAuthorized,
      modulationPermitted,
      transPower,
      antennaeGain,
      antennaeHeight,
      transmitLocation,
      stlFrequency,
      stlPower,
      stlLocation,
      txAssignDate,
      stlAssignDate,
      assignedByFirstName,
      assignedByLastName,
      authorizedByFirstName,
      authorizedByLastName,
      spectrumFullReport,
      status,
      TAUniqueID,
      approveRejectDate,
      equipmentCategory,
      equipmentName,
      equipmentModel,
      equipmentDesc,
      applicableStandards,
      applicantName,
      applicantAddressLine1,
      applicantAddressLine2,
      applicantCity,
      applicantState,
      applicantPostal,
      applicantCountry,
      typeApprovalFullReport,
      taCertificate,
      assessedByFirstName,
      assessedByLastName,
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
      operationBand,
      applicableServiceType,
      serviceAuthorized,
      modulationPermitted,
      transPower,
      antennaeGain,
      antennaeHeight,
      transmitLocation,
      stlFrequency,
      stlPower,
      stlLocation,
      txAssignDate,
      stlAssignDate,
      assignedByFirstName,
      assignedByLastName,
      authorizedByFirstName,
      authorizedByLastName,
      spectrumFullReport,
      status,
      approveRejectDate,
      TAUniqueID,
      equipmentCategory,
      equipmentName,
      equipmentModel,
      equipmentDesc,
      applicableStandards,
      applicantName,
      applicantAddressLine1,
      applicantAddressLine2,
      applicantCity,
      applicantState,
      applicantPostal,
      applicantCountry,
      typeApprovalFullReport,
      taCertificate,
      assessedByFirstName,
      assessedByLastName,
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
      operationBand,
      applicableServiceType,
      serviceAuthorized,
      modulationPermitted,
      transPower,
      antennaeGain,
      antennaeHeight,
      transmitLocation,
      stlFrequency,
      stlPower,
      stlLocation,
      txAssignDate,
      stlAssignDate,
      assignedByFirstName,
      assignedByLastName,
      authorizedByFirstName,
      authorizedByLastName,
      // spectrumFullReport,
      status,
      approveRejectDate,
      TAUniqueID,
      equipmentCategory,
      equipmentName,
      equipmentModel,
      equipmentDesc,
      applicableStandards,
      applicantName,
      applicantAddressLine1,
      applicantAddressLine2,
      applicantCity,
      applicantState,
      applicantPostal,
      applicantCountry,
      // typeApprovalFullReport,
      // taCertificate,
      assessedByFirstName,
      assessedByLastName,
    } = this.state;
    // TODO: Import datasets from somewhere else
    const bands = [
      {
        id: 'KHz',
        name: 'KHz',
      },
      {
        id: 'MHz',
        name: 'MHz',
      },
      {
        id: 'GHz',
        name: 'GHz',
      },
    ];
    const applicableServiceTypes = [
      {
        id: 'ComplimentaryTV',
        name: 'Complimentary TV Services',
      },
      {
        id: 'ContentProvision',
        name: 'Content Provision Services',
      },
      {
        id: 'CoreTV',
        name: 'Core TV Service',
      },
      {
        id: 'emergencySafety',
        name: 'Emergency and Safety Services',
      },
      {
        id: 'FixedSub',
        name: 'Fixed Subscriber Services',
      },
      {
        id: 'ISPC',
        name: 'ISPC',
      },
      {
        id: 'MNC',
        name: 'MNC',
      },
      {
        id: 'MNO',
        name: 'MNO Services',
      },
      {
        id: 'MobileSub',
        name: 'Mobile Subscriber Services',
      },
      {
        id: 'NSPC',
        name: 'NSPC',
      },
      {
        id: 'PremiumSub',
        name: 'Premium Subscriber Services',
      },
      {
        id: 'Special',
        name: 'Special Services',
      },
    ];
    const servicesAuthorized = [
      {
        id: 'DAB',
        name: 'DAB',
      },
      {
        id: 'DigitalTV',
        name: 'Digital TV',
      },
      {
        id: 'MobileTel2g',
        name: 'Mobile Telephony (2G)',
      },
      {
        id: 'MobileTel3g',
        name: 'Mobile Telephony (3G)',
      },
      {
        id: 'MobileTelLTE',
        name: 'Mobile Telephony (LTE)',
      },
      {
        id: 'Microwave',
        name: 'Microwave',
      },
      {
        id: 'TwoWayRadio',
        name: 'Two Way Radio',
      },
    ];
    const choices = [
      {
        id: '1',
        name: 'Choice 1',
      },
      {
        id: '2',
        name: 'Choice 2',
      },
      {
        id: '3',
        name: 'Choice 3',
      },
    ];
    const statuses = [
      {
        id: 'approved',
        name: 'Approved',
      },
      {
        id: 'rejected',
        name: 'Rejected',
      },
    ];
    const equipmentCategories = [{ id: 'stb', name: 'STB' }, { id: 'idtv', name: 'IDTV' }];
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
          <div className='Spectrum section'>
            <div className='title'>
              <span>Spectrum Compliance</span>
            </div>
            <div className='details'>
              <div className='band'>
                { /* eslint-disable */ }
                <Select
                  name='operationband'
                  placeholder='Select Band'
                  options={bands}
                  title='Band of Operation'
                  value={operationBand}
                  handleChange={this.handleChange}
                />
              </div>
              <div className='service'>
                <Select
                  name='authService'
                  placeholder='Select a Service'
                  options={servicesAuthorized}
                  title='Authorized Services'
                  value={serviceAuthorized}
                  handleChange={this.handleChange}
                />
              </div>
              <div className='modulation'>
                <Select
                  name='modulationPermitted'
                  placeholder='Select a Category'
                  options={choices}
                  title='Modulation Permitted'
                  value={modulationPermitted}
                  handleChange={this.handleChange}
                />
              </div>
              <div className='transPower'>
                <label className='label' htmlFor='transPower'>
                  Assigned Transmission Power (Watts)
                  <input
                    type='number'
                    className='value'
                    name='transPower'
                    value={transPower}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className='antennaeGain'>
                <label className='label' htmlFor='antennaeGain'>
                  Authorized Antennae Gain (dB)
                  <input
                    type='number'
                    className='value'
                    name='antennaeGain'
                    value={antennaeGain}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className='antennaeHeight'>
                <label className='label' htmlFor='antennaeHeight'>
                  Authorized Antennae Height (m)
                  <input
                    type='number'
                    className='value'
                    name='antennaeHeight'
                    value={antennaeHeight}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className='transmitLocation'>
                <label className='label' htmlFor='transmitLocation'>
                  Authorized Transmit Location
                  <input
                    type='text'
                    className='value'
                    name='transmitLocation'
                    value={transmitLocation}
                    onChange={this.handleChange}
                  />
                </label>
                <input type='text' id='transmitLocation' />
              </div>
              <div className='stlFrequency'>
                <label className='label' htmlFor='stlFrequency'>
                  Assigned STL Frequency (KHz, MHz, GHz)
                  <input
                    type='number'
                    className='value'
                    name='stlFrequency'
                    value={stlFrequency}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className='stlPower'>
                <label className='label' htmlFor='stlPower'>
                  Assigned STL Power (Watts)
                </label>
                <input
                  type='number'
                  className='value'
                  name='stlPower'
                  value={stlPower}
                  onChange={this.handleChange}
                />
              </div>
              <div className='stlLocation'>
                <label className='label' htmlFor='stlLocation'>
                  Assigned STL Location
                </label>
                <input
                  type='number'
                  className='value'
                  name='stlLocation'
                  value={stlLocation}
                  onChange={this.handleChange}
                />
              </div>
              <div className='txAssignDate'>
                <label className='label' htmlFor='txAssignDate'>
                  TX Freq. Assignment Date
                </label>
                <input
                  type='date'
                  className='value'
                  name='txAssignDate'
                  value={txAssignDate}
                  onChange={this.handleChange}
                />
              </div>
              <div className='stlAssignDate'>
                <label className='label' htmlFor='stlAssignDate'>
                  STL Freq. Assignment Date
                </label>
                <input
                  type='date'
                  className='value'
                  name='stlAssignDate'
                  value={stlAssignDate}
                  onChange={this.handleChange}
                />
              </div>
              <div className='assignedBy'>
                <label className='label' htmlFor='assignedBy'>
                  Assigned By
                </label>
                <input
                  type='text'
                  className='value'
                  placeholder='First Name'
                  name='assignedByFirstName'
                  value={assignedByFirstName}
                  onChange={this.handleChange}
                />
                <input
                  type='text'
                  className='value'
                  placeholder='Last Name'
                  name='assignedByLastName'
                  value={assignedByLastName}
                  onChange={this.handleChange}
                />
              </div>
              <div className='authorizedBy'>
                <label className='label' htmlFor='authorizedByFirstName'>
                  Authorized By
                </label>
                <input
                  type='text'
                  className='value'
                  placeholder='First Name'
                  name='authorizedByFirstName'
                  value={authorizedByFirstName}
                  onChange={this.handleChange}
                />
                <input
                  type='text'
                  className='value'
                  placeholder='Last Name'
                  name='assignedByLastName'
                  value={authorizedByLastName}
                  onChange={this.handleChange}
                />
              </div>
              <div className='spectrum-fullReport'>
                <label className='label' htmlFor='spectrumFullReport'>
                  Full Report
                </label>
                <input
                  type='file'
                  className='value'
                  placeholder='First Name'
                  name='spectrumFullReport'
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className='typeApproval section'>
            <div className='title'>
              <span>Type Approval</span>
            </div>
            <div className='details'>
              {/* TBD */}
              <div className='status'>
                <Select
                  name='status'
                  options={statuses}
                  placeholder='Status'
                  title='Status'
                  value={status}
                  handleChange={this.handleChange}
                />
              </div>
              <div className='approveRejectDate'>
                <label className='label' htmlFor='approveRejectDate'>
                  Approval/Rejection Date
                </label>
                <input
                  type='date'
                  className='value'
                  name='approveRejectDate'
                  value={approveRejectDate}
                  onChange={this.handleChange}
                />
              </div>
              <div className='TAUniqueID'>
                <label className='label' htmlFor='TAUniqueID'>
                  TA Unique ID
                </label>
                <input
                  type='text'
                  className='value'
                  name='TAUniqueID'
                  value={TAUniqueID}
                  onChange={this.handleChange}
                />
              </div>
              <div className='equipmentCategory'>
                <Select
                  name='equipmentCategory'
                  placeholder='Equipment Category'
                  options={equipmentCategories}
                  title='Equipment Category'
                  value={equipmentCategory}
                  handleChange={this.handleChange}
                />
              </div>
              <div className='equipmentName'>
                <label className='label' htmlFor='equipmentName'>
                  Equipment Name
                </label>
                <input
                  type='text'
                  className='value'
                  name='equipmentName'
                  value={equipmentName}
                  onChange={this.handleChange}
                />
              </div>
              <div className='equipmentModel'>
                <label className='label' htmlFor='equipmentModel'>
                  Equipment Model
                </label>
                <input
                  type='text'
                  className='value'
                  name='equipmentModel'
                  value={equipmentModel}
                  onChange={this.handleChange}
                />
              </div>
              <div className='equipmentDesc'>
                <TextArea
                  title='Equipment Description'
                  rows={4}
                  resize={false}
                  name='equipmentDesc'
                  placeholder='keep it brief'
                  value={equipmentDesc}
                  handleChange={this.handleChange}
                />
              </div>
              <div className='applicableStandards'>
                <label className='label' htmlFor='applicableStandards'>
                  Applicable Standard(s)
                </label>
                <input
                  type='text'
                  className='value'
                  name='applicableStandards'
                  value={applicableStandards}
                  onChange={this.handleChange}
                />
              </div>
              <div className='applicantName'>
                <label className='label' htmlFor='applicantName'>
                  Applicant Name
                </label>
                <input
                  type='text'
                  className='value'
                  name='applicantName'
                  value={applicantName}
                  onChange={this.handleChange}
                />
              </div>
              <div className='applicantAddress'>
                <label className='label' htmlFor='applicantAddress'>
                  Applicant Address
                </label>
                <input
                  type='text'
                  name='applicantAddressLine1'
                  value={applicantAddressLine1}
                  onChange={this.handleChange}
                />
                <input
                  type='text'
                  className='value'
                  name='applicantAddressLine2'
                  value={applicantAddressLine2}
                  onChange={this.handleChange}
                />
                <input
                  type='text'
                  className='value'
                  name='applicantCity'
                  value={applicantCity}
                  onChange={this.handleChange}
                />
                <input
                  type='text'
                  className='value'
                  name='applicantState'
                  value={applicantState}
                  onChange={this.handleChange}
                />
                <input
                  type='text'
                  className='value'
                  name='applicantPostal'
                  value={applicantPostal}
                  onChange={this.handleChange}
                />
                <input
                  type='text'
                  className='value'
                  name='applicantCountry'
                  value={applicantCountry}
                  onChange={this.handleChange}
                />
              </div>
              <div className='typeApproval-fullReport'>
                <label className='label' htmlFor='typeApproval-fullReport'>
                  Full Report
                </label>
                <input
                  type='file'
                  className='value'
                  name='typeApprovalFullReport'
                  onChange={this.handleChange}
                />
              </div>
              <div className='taCertificate'>
                <label className='label' htmlFor='taCertificate'>
                  TA Certificate
                </label>
                <input
                  type='file'
                  className='value'
                  name='taCertificate'
                  onChange={this.handleChange}
                />
              </div>
              <div className='assessedBy'>
                <label className='label' htmlFor='assessedBy'>
                  Assessed By
                </label>
                <input
                  type='text'
                  className='value'
                  placeholder='First Name'
                  name='assessedByFirstName'
                  value={assessedByFirstName}
                  onChange={this.handleChange}
                />
                <input
                  type='text'
                  className='value'
                  placeholder='Last Name'
                  name='assessedByLastName'
                  value={assessedByLastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className='numbering section'>
            <div className='title'>
              <span>Numbering</span>
            </div>
            <div className='details'>
              {/* TBD */}
              <div className='serviceCategory'>
                <label className='label' htmlFor='serviceCategory'>
                  Service Category
                </label>
                <select name='serviceCategory' id='serviceCategory'>
                  <option value='Broadcasting'>Broadcasting</option>
                  <option value='Telecom'>Telecommunications</option>
                  <option value='Postal'>Postal</option>
                </select>
              </div>
              <div className='numberType'>
                <label className='label' htmlFor='numberType'>
                  Number Type
                </label>
                <select name='numberType' id='numberType'>
                  <option value='DVB IDs'>DVB IDs</option>
                  <option value='LCN'>LCN</option>
                  <option value='Network Codes'>Network Codes</option>
                  <option value='ONIDs'>ONIDs</option>
                  <option value='Short Code'>Short Code</option>
                  <option value='Subscriber Numbers'>Subscriber Numbers</option>
                </select>
              </div>
              <div className='serviceName'>
                <label className='label' htmlFor='serviceName'>
                  Service Name
                </label>
                <input type='text' id='serviceName'/>
              </div>
              <div className='applicableServiceType'>
                <Select
                  name='applicableServiceType'
                  placeholder='Select Category'
                  options={applicableServiceTypes}
                  title='Applicable Service Types'
                  value={applicableServiceType}
                  handleChange={this.handleChange}
                />
              </div>
              <div className='serviceDescription'>
                <label className='label' htmlFor='serviceDescription'>
                  Service Description
                </label>
                <textarea rows='5' cols='50' id='serviceDescription'/>
              </div>
              <div className='assignedRange'>
                <label className='label' htmlFor='assignedRange'>
                  Assigned Range
                </label>
                <select name='assignedRange' id='assignedRange'>
                  <option value='Choice 1'>Choice 1</option>
                  <option value='Choice 2'>Choice 2</option>
                  <option value='Choice 3'>Choice 3</option>
                </select>
              </div>
              <div className='assignedNumber'>
                <label className='label' htmlFor='assignedNumber'>
                  Assigned Number
                </label>
                <select name='assignedNumber' id='assignedNumber'>
                  <option value='Choice 1'>Choice 1</option>
                  <option value='Choice 2'>Choice 2</option>
                  <option value='Choice 3'>Choice 3</option>
                  <option value='Choice 4'>Choice 4</option>
                </select>
              </div>
              <div className='numberAssignDate'>
                <label className='label' htmlFor='numberAssignDate'>
                  Assignment Date
                </label>
                <input type='date' id='numberAssignDate' />
              </div>
              <div className='numberingAssignedBy'>
                <label className='label' htmlFor='numberingAssignedBy'>
                  Assigned By
                </label>
                <input type='text' id='numberingAssignedByFirstName' placeholder='First Name'/>
                <input type='text' id='numberingAssignedByLastName' placeholder='Last Name'/>
              </div>
              <div className='lastAuthorizationRenewalDate'>
                <label className='label' htmlFor='lastAuthorizationRenewalDate'>
                  Last Authorization Renewal Date
                </label>
                <input type='date' id='lastAuthorizationRenewalDate' />
              </div>
              <div className='complianceStatus'>
                <label className='label' htmlFor='complianceStatus'>
                  Compliance Status
                </label>
                <select name='complianceStatus' id='complianceStatus'>
                  <option value='Compliant'>Compliant</option>
                  <option value='Not Compliant'>Not Compliant</option>
                </select>
              </div>
              <div className='numberingNotes'>
                <label className='label' htmlFor='numberingNotes'>
                  Notes
                </label>
                <textarea rows='5' cols='50' id='numberingNotes'/>
              </div>
              <div className='numbering-recommendations'>
                <label className='label' htmlFor='numbering-recommendations'>
                  Recommendations
                </label>
                <textarea rows='5' cols='50' id='numbering-recommendations'/>
              </div>
              <div className='numbering-fullReport'>
                <label className='label' htmlFor='numbering-fullReport'>
                  Full Report
                </label>
                <input type='file' id='numbering-fullReport' />
              </div>
              <div className='lastUpdated'>
                <label className='label' htmlFor='lastUpdated'>
                  Last Updated
                </label>
                <input type='date' id='lastUpdated' />
              </div>
              <div className='lastUpdatedBy'>
                <label className='label' htmlFor='lastUpdatedBy'>
                  Last Updated By
                </label>
                <input type='text' id='lastUpdatedByFirstName' placeholder='First Name'/>
                <input type='text' id='lastUpdatedByLastName' placeholder='Last Name'/>
              </div>
            </div>
          </div>
          <div className='broadcasting section'>
            <div className='title'>
              <span>Technical Broadcasting</span>
            </div>
            <div className='details'>
              <div className='callSign'>
                <label className='label' htmlFor='callSign'>
                  Call Sign
                </label>
                <input type='text' id='broadcasting-callSign'/>
              </div>
              <div className='studioLocation'>
                <label className='label' htmlFor='studioLocation'>
                  Studio Location (where applicable)
                </label>
                <textarea rows='5' cols='50' id='studioLocation'/>
              </div>
              <div className='transmitterLocation'>
                <label className='label' htmlFor='transmitterLocation'>
                  Transmitter Location (where applicable)
                </label>
                <textarea rows='5' cols='50' id='transmitterLocation'/>
              </div>
              <div className='productionStandard'>
                <label className='label' htmlFor='productionStandard'>
                  BR - Production Standard (If Applicable)
                </label>
                <select name='productionStandard' className='value' id='productionStandard'>
                  <option value='Standard Definition'>Standard Definition</option>
                  <option value='High Definition'>High Definition</option>
                </select>
              </div>
              <div className='productionOutputFormat'>
                <label className='label' htmlFor='productionOutputFormat'>
                  BR - Production Output Format (If Applicable)
                </label>
                <select name='productionOutputFormat' className='value' id='productionOutputFormat'>
                  <option value='Choice 1'>Choice 1</option>
                  <option value='Choice 2'>Choice 2</option>
                  <option value='Choice 3'>Choice 3</option>
                </select>
              </div>
              <div className='stlMedium'>
                <label className='label' htmlFor='stlMedium'>
                  STL Medium Used (If Applicable)
                </label>
                <select name='stlMedium' className='value' id='stlMedium'>
                  <option value='Satellite Link'>Satellite Link</option>
                  <option value='Microwave Link'>Microwave Link</option>
                  <option value='Fiber Cable'>Fiber Cable</option>
                </select>
              </div>
              <div className='authorizedContentDistributor'>
                <label className='label' htmlFor='authorizedContentDistributor'>
                  Authorized Content Distributor
                </label>
                <input type='text' id='authorizedContentDistributor'/>
              </div>
              <div className='authorizedMuxOperator'>
                <label className='label' htmlFor='authorizedMuxOperator'>
                  Authorized MUX Operator
                </label>
                <input type='text' id='authorizedMuxOperator'/>
              </div>
              <div className='authorizedSignalDistributor'>
                <label className='label' htmlFor='authorizedSignalDistributor'>
                  Authorized Signal Distributor
                </label>
                <input type='text' id='authorizedSignalDistributor'/>
              </div>
              <div className='disasterRecoveryPlan'>
                <label className='label' htmlFor='disasterRecoveryPlan'>
                  Disaster Recovery Plan
                </label>
                <select name='disasterRecoveryPlan' className='value' id='disasterRecoveryPlan'>
                  <option value='submitted satisfactory'>Submitted (Satisfactory)</option>
                  <option value='submitted not satisfactory'>Submitted (Not Satisfactory)</option>
                  <option value='not submitted'>Not submitted</option>
                </select>
              </div>
              <div className='contentBackupMeasures'>
                <label className='label' htmlFor='contentBackupMeasures'>
                  Content Backup Measures
                </label>
                <select name='contentBackupMeasures' className='value' id='contentBackupMeasures'>
                  <option value='Available'>Available</option>
                  <option value='Not Available'>Not Available</option>
                </select>
              </div>
              <div className='equipmentRedundancy'>
                <label className='label' htmlFor='equipmentRedundancy'>
                  Equipment Redundancy
                </label>
                <select name='equipmentRedundancy' className='value' id='equipmentRedundancy'>
                  <option value='Available'>Available</option>
                  <option value='Not Available'>Not Available</option>
                </select>
              </div>
              <div className='electroMechSafetyMeasures'>
                <label className='label' htmlFor='electroMechSafetyMeasures'>
                  Electromechanical Safety Measures
                </label>
                <select name='electroMechSafetyMeasures' className='value' id='electroMechSafetyMeasures'>
                  <option value='Available'>Available</option>
                  <option value='Not Available'>Not Available</option>
                </select>
              </div>
              <div className='qualityAssuranceMeasures'>
                <label className='label' htmlFor='qualityAssuranceMeasures'>
                  Quality Assurance Measures
                </label>
                <select name='qualityAssuranceMeasures' className='value' id='qualityAssuranceMeasures'>
                  <option value='Available'>Available</option>
                  <option value='Not Available'>Not Available</option>
                </select>
              </div>
              <div className='powerBackupEquipment'>
                <label className='label' htmlFor='powerBackupEquipment'>
                  Power Backup Equipment
                </label>
                <select name='powerBackupEquipment' className='value' id='powerBackupEquipment'>
                  <option value='Available'>Available</option>
                  <option value='Not Available'>Not Available</option>
                </select>
              </div>
              <div className='accessControl'>
                <label className='label' htmlFor='accessControl'>
                  Access Control for Studio & TR
                </label>
                <select name='accessControl' className='value' id='accessControl'>
                  <option value='Available'>Available</option>
                  <option value='Not Available'>Not Available</option>
                </select>
              </div>
              <div className='fireDetectionEquipment'>
                <label className='label' htmlFor='fireDetectionEquipment'>
                  Fire Detection and Protection Equipment
                </label>
                <select name='fireDetectionEquipment' className='value' id='fireDetectionEquipment'>
                  <option value='Available'>Available</option>
                  <option value='Not Available'>Not Available</option>
                </select>
              </div>
              <div className='structuredCabling'>
                <label className='label' htmlFor='structuredCabling'>
                  Structured Cabling & Trunking
                </label>
                <select name='structuredCabling' className='value' id='structuredCabling'>
                  <option value='Available'>Available</option>
                  <option value='Not Available'>Not Available</option>
                </select>
              </div>
              <div className='electricalInstallationCertificate'>
                <label className='label' htmlFor='electricalInstallationCertificate'>
                  Electrical Installation Certificate
                </label>
                <select name='electricalInstallationCertificate' className='value' id='electricalInstallationCertificate'>
                  <option value='Available'>Available</option>
                  <option value='Not Available'>Not Available</option>
                </select>
              </div>
              <div className='airconEquipment'>
                <label className='label' htmlFor='airconEquipment'>
                  Air Conditioning Equipment
                </label>
                <select name='airconEquipment' className='value' id='airconEquipment'>
                  <option value='Available'>Available</option>
                  <option value='Not Available'>Not Available</option>
                </select>
              </div>
              <div className='soundProofing'>
                <label className='label' htmlFor='soundProofing'>
                  Sound Proofing & Studio Acoustics
                </label>
                <select name='soundProofing' className='value' id='soundProofing'>
                  <option value='Available'>Available</option>
                  <option value='Not Available'>Not Available</option>
                </select>
              </div>
              <div className='towerClimbingAccessories'>
                <label className='label' htmlFor='towerClimbingAccessories'>
                  Tower Color Coding & Climbing Accessories
                </label>
                <select name='towerClimbingAccessories' className='value' id='towerClimbingAccessories'>
                  <option value='Available'>Available</option>
                  <option value='Not Available'>Not Available</option>
                </select>
              </div>
              <div className='lastInspectionDate'>
                <label className='label' htmlFor='lastInspectionDate'>
                  Last Inspection Date
                </label>
                <input type='date' id='lastInspectionDate' />
              </div>
              <div className='broadcastingNotes'>
                <label className='label' htmlFor='broadcastingNotes'>
                  Notes
                </label>
                <textarea rows='4' cols='50' id='broadcastingNotes'/>
              </div>
              <div className='broadcasting-recommendations'>
                <label className='label' htmlFor='broadcasting-recommendations'>
                  Recommendations
                </label>
                <textarea rows='4' cols='50' id='broadcasting-recommendations'/>
              </div>
              <div className='broadcasting-fullReport'>
                <label className='label' htmlFor='broadcasting-fullReport'>
                  Full Report
                </label>
                <input type='file' id='broadcasting-fullReport' />
              </div>
              <div className='inspectedBy'>
                <label className='label' htmlFor='inspectedBy'>
                  Inspected By
                </label>
                <input type='text' id='broadcasting-inspectedByFirstName' placeholder='First Name'/>
                <input type='text' id='broadcasting-inspectedByLastName' placeholder='Last Name'/>
              </div>
              <div className='reviewedBy'>
                <label className='label' htmlFor='reviewedBy'>
                  Reviewed By
                </label>
                <input type='text' id='broadcasting-reviewedByFirstName' placeholder='First Name'/>
                <input type='text' id='broadcasting-reviewedByLastName' placeholder='Last Name'/>
              </div>
              <div className='approvedBy'>
                <label className='label' htmlFor='approvedBy'>
                  Approved By
                </label>
                <input type='text' id='broadcasting-approvedByFirstName' placeholder='First Name'/>
                <input type='text' id='broadcasting-approvedByLastName' placeholder='Last Name'/>
              </div>
            </div>
          </div>
          <div className='postal section'>
            <div className='title'>
              <span>Technical Postal</span>
            </div>
            <div className='details'>
              <div className='callSign'>
                <label className='label' htmlFor='callSign'>
                  Call Sign
                </label>
                <input type='text' id='postal-callSign'/>
              </div>
              <div className='physicalLocation'>
                <label className='label' htmlFor='physicalLocation'>
                  Physical Location Requirements
                </label>
                <textarea rows='4' cols='50' id='physicalLocation'/>
              </div>
              <div className='licenseValidity'>
                <label className='label' htmlFor='licenseValidity'>
                  Validity & Display of License
                </label>
                <select name='licenseValidity' className='value' id='licenseValidity'>
                  <option value='Compliant'>Compliant</option>
                  <option value='None Compliant'>None Compliant</option>
                  <option value='Satisfactory'>Satisfactory</option>
                  <option value='None Satisfactory'>None Satisfactory</option>
                </select>
              </div>
              <div className='articleProtection'>
                <label className='label' htmlFor='articleProtection'>
                  Confidentiality & Protection of Postal Articles
                </label>
                <select name='articleProtection' className='value' id='articleProtection'>
                  <option value='Compliant'>Compliant</option>
                  <option value='None Compliant'>None Compliant</option>
                  <option value='Satisfactory'>Satisfactory</option>
                  <option value='None Satisfactory'>None Satisfactory</option>
                </select>
              </div>
              <div className='training'>
                <label className='label' htmlFor='training'>
                  Training Requirements
                </label>
                <select name='training' className='value' id='training'>
                  <option value='Satisfactory'>Satisfactory</option>
                  <option value='None Satisfactory'>None Satisfactory</option>
                </select>
              </div>
              <div className='licenseValidity'>
                <label className='label' htmlFor='qosWorkingDays'>
                  QoS Requirements: Working Days
                </label>
                <select name='qosWorkingDays' className='value' id='qosWorkingDays'>
                  <option value='Satisfactory'>Satisfactory</option>
                  <option value='None Satisfactory'>None Satisfactory</option>
                </select>
              </div>
              <div className='qosLiability'>
                <label className='label' htmlFor='qosLiability'>
                  QoS Requirements: Claims/ Liability Handling Policy
                </label>
                <select name='qosLiability' className='value' id='qosLiability'>
                  <option value='Satisfactory'>Satisfactory</option>
                  <option value='None Satisfactory'>None Satisfactory</option>
                </select>
              </div>
              <div className='qosProhibited'>
                <label className='label' htmlFor='qosProhibited'>
                  QoS Requirements: Control of Prohibited Items
                </label>
                <select name='qosProhibited' className='value' id='qosProhibited'>
                  <option value='Satisfactory'>Satisfactory</option>
                  <option value='None Satisfactory'>None Satisfactory</option>
                </select>
              </div>
              <div className='complaintsRegister'>
                <label className='label' htmlFor='complaintsRegister'>
                  QoS Requirements: Complaints Register
                </label>
                <select name='complaintsRegister' className='value' id='complaintsRegister'>
                  <option value='Satisfactory'>Satisfactory</option>
                  <option value='None Satisfactory'>None Satisfactory</option>
                </select>
              </div>
              <div className='postal-notes'>
                <label className='label' htmlFor='postal-notes'>
                  Notes 01
                </label>
                <textarea rows='4' cols='50' id='postal-notes'/>
              </div>
              <div className='postal-notes2'>
                <label className='label' htmlFor='postal-notes2'>
                  Notes 02
                </label>
                <textarea rows='4' cols='50' id='postal-notes2'/>
              </div>
              <div className='postal-recommendations'>
                <label className='label' htmlFor='postal-recommendations'>
                  Recommendations
                </label>
                <textarea rows='4' cols='50' id='postal-recommendations'/>
              </div>
              <div className='postal-fullReport'>
                <label className='label' htmlFor='postal-fullReport'>
                  Full Report
                </label>
                <input type='file' id='postal-fullReport' />
              </div>
              <div className='inspectedBy'>
                <label className='label' htmlFor='inspectedBy'>
                  Inspected By
                </label>
                <input type='text' id='postal-inspectedByFirstName' placeholder='First Name'/>
                <input type='text' id='postal-inspectedByLastName' placeholder='Last Name'/>
              </div>
              <div className='reviewedBy'>
                <label className='label' htmlFor='reviewedBy'>
                  Reviewed By
                </label>
                <input type='text' id='postal-reviewedByFirstName' placeholder='First Name'/>
                <input type='text' id='postal-reviewedByLastName' placeholder='Last Name'/>
              </div>
              <div className='approvedBy'>
                <label className='label' htmlFor='approvedBy'>
                  Approved By
                </label>
                <input type='text' id='postal-approvedByFirstName' placeholder='First Name'/>
                <input type='text' id='postal-approvedByLastName' placeholder='Last Name'/>
              </div>
            </div>
          </div>
          <div className='telecom section'>
            <div className='title'>
              <span>Technical Telecom</span>
            </div>
            <div className='details'>
              <div className='serviceDetails'>
                <label className='label' htmlFor='serviceDetails'>
                  Details of Service Provided
                </label>
                <textarea rows='4' cols='50' id='serviceDetails'/>
              </div>
              <div className='serviceTech'>
                <label className='label' htmlFor='serviceTech'>
                  Service Technology, Equipment Interface & Type Approval
                </label>
                <textarea rows='4' cols='50' id='serviceTech'/>
              </div>
              <div className='statusQOS'>
                <label className='label' htmlFor='statusQOS'>
                  Status on QoS Requirements
                </label>
                <textarea rows='4' cols='50' id='statusQOS'/>
              </div>
              <div className='coverageArea'>
                <label className='label' htmlFor='coverageArea'>
                  Coverage area details
                </label>
                <textarea rows='4' cols='50' id='coverageArea'/>
              </div>
              <div className='sharing'>
                <label className='label' htmlFor='sharing'>
                  Interconnection and Facility Sharing Requirements
                </label>
                <textarea rows='4' cols='50' id='sharing'/>
              </div>
              <div className='protectionStatus'>
                <label className='label' htmlFor='protectionStatus'>
                  Status on Protection of Public Operator Facilities
                </label>
                <textarea rows='4' cols='50' id='protectionStatus'/>
              </div>
              <div className='summaryEssentialResourceAuth'>
                <label className='label' htmlFor='summaryEssentialResourceAuth'>
                  Summary on Authorizations for Essential Resources
                </label>
                <textarea rows='4' cols='50' id='summaryEssentialResourceAuth'/>
              </div>
              <div className='outageStatus'>
                <label className='label' htmlFor='outageStatus'>
                  Status on Outages/ Interruption of Operations
                </label>
                <textarea rows='4' cols='50' id='outageStatus'/>
              </div>
              <div className='outageReports'>
                <label className='label' htmlFor='outageReports'>
                  Outage Reports
                </label>
                <input type='file' id='outageReports' />
              </div>
              <div className='emergencyRequirements'>
                <label className='label' htmlFor='emergencyRequirements'>
                  Emergency Services & Disaster Requirements
                </label>
                <textarea rows='4' cols='50' id='emergencyRequirements'/>
              </div>
              <div className='generalProvisions'>
                <label className='label' htmlFor='generalProvisions'>
                  General Provisions
                </label>
                <textarea rows='4' cols='50' id='generalProvisions'/>
              </div>
              <div className='telecom-notes'>
                <label className='label' htmlFor='telecom-notes'>
                  Notes
                </label>
                <textarea rows='4' cols='50' id='telecom-notes'/>
              </div>
              <div className='telecom-recommendations'>
                <label className='label' htmlFor='telecom-recommendations'>
                  Recommendations
                </label>
                <textarea rows='4' cols='50' id='telecom-recommendations'/>
              </div>
              <div className='telecom-fullReport'>
                <label className='label' htmlFor='telecom-fullReport'>
                  Full Report
                </label>
                <input type='file' id='telecom-fullReport' />
              </div>
              <div className='inspectedBy'>
                <label className='label' htmlFor='inspectedBy'>
                  Inspected By
                </label>
                <input type='text' id='telecom-inspectedByFirstName' placeholder='First Name'/>
                <input type='text' id='telecom-inspectedByLastName' placeholder='Last Name'/>
              </div>
              <div className='reviewedBy'>
                <label className='label' htmlFor='reviewedBy'>
                  Reviewed By
                </label>
                <input type='text' id='telecom-reviewedByFirstName' placeholder='First Name'/>
                <input type='text' id='telecom-reviewedByLastName' placeholder='Last Name'/>
              </div>
              <div className='telecom-authorizedBy'>
                <label className='label' htmlFor='telecom-authorizedBy'>
                  Approved By
                </label>
                <input type='text' id='telecom-authorizedByFirstName' placeholder='First Name'/>
                <input type='text' id='telecom-authorizedByLastName' placeholder='Last Name'/>
              </div>
            </div>
          </div>

        </div>
      </form>
    );
  };
}

const mapDispatchToProps = (dispatch, entry) => {
  return {
    addEntry: entry => {
      dispatch(createEntry(entry))
    }
  }
}

export default connect(null, mapDispatchToProps)(RecordForm);
