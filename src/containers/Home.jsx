import React from 'react';
import { withRouter } from 'react-router-dom';

// common
import Button from '../common/Button';

// icons
import SearchIcon from '../components/icons/Search';

// logo
import logo from '../assets/images/ucclogo.png';

/**
 * @name Dashboard
 * @summary renders Home component
 * @extends React.component
 */

const Home = () => (
  <div className='container flex-col'>
    <div className='flex-row grow'>
      <div className='clipping' />
      <aside className='sidenav' />
      <main className='dash-container'>
        <div className='top-nav'>
          <div className='logo left'>
            <div className='logo-wrapper'>
              <div className='hamburger' />
              <div className='logo-image'><img src={logo} alt='logo' /></div>
            </div>
          </div>
          <div className='search'>
            <div className='search-bar'>
              <form className='form'>
                <div className='search-input'>
                  <SearchIcon />
                  <input
                    type='text'
                    className='search-text'
                    autoComplete='off'
                    aria-label='search'
                    aria-autocomplete='list'
                    aria-haspopup='true'
                    placeholder='Search for something...'
                    onClick={() => {}}
                    maxLength='512'
                  />
                </div>
              </form>
            </div>
          </div>
          <div className='control right'>
            <div className='controls'>
              <div className='notifications' />
              <div className='username'>
                <span>Hi, Muheki</span>
              </div>
              <div className='dropdown-icon' />
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='content__header row-wrapper'>
            <div className='page__title'>
              Category
            </div>
            <div className='sorter sub'>
              <div className='toggle btn__small'>Status</div>
              <div className='toggle btn__small'>Resource</div>
              <div className='toggle btn__small'>Coverage</div>
              <div className='toggle btn__small'>Category</div>
              <div className='toggle btn__small'>Licensee</div>
              <div className='toggle btn__small'>Date </div>
            </div>
            <div className='entrycounter sub'>
              <span>Showing</span>
              <div className='entrycounter__selector'>
                <a href='/' className='dropdown'>
                  <span className='entry__number'>25</span>
                  <div className='icon__small'>
                    <span className='icon down' />
                  </div>
                </a>
              </div>
              <div>of</div>
              <span className='entry__number'>3000</span>
              <span>entries</span>
            </div>
            <div className='viewmode__icons'>
              <div className='gridview icon' />
              <div className='listview icon' />
            </div>
            <div className='cta'>
              <Button
                name='Create'
                aria-label='Create button'
                value='Create'
                className='btn__large blue'
                onClick={() => {}}
              />
            </div>
          </div>
          <article className='renderview'>
            <div className='linear-view'>
              <div className='card active'>
                <form className='form-container'>
                  <div className='search'>
                    <div className='search-bar'>
                      <div className='form'>
                        <div className='search-input'>
                          <SearchIcon />
                          <input
                            type='text'
                            className='search-text'
                            autoComplete='off'
                            aria-label='search'
                            aria-autocomplete='list'
                            aria-haspopup='true'
                            placeholder='Find Company'
                            onClick={() => {}}
                            maxLength='512'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='sections'>
                    <div className='company section'>
                      <div className='title'>
                        <span>Company Details</span>
                      </div>
                      <div className='actions'>
                        <button type='button' className='edit'>Edit</button>
                      </div>
                      <div className='details'>
                        <div className='name'>
                          <label htmlFor='name'>
                            Name
                            <input id='name' type='text' className='value' value='Enkya Inc' />
                          </label>
                        </div>
                        <div className='location'>
                          <div className='section-header'>Location</div>
                          <div className='district'>
                            <label htmlFor='district'>
                              District
                              <input id='district' className='value' type='text' value='Wakiso' />
                            </label>
                          </div>
                          <div className='postal'>
                            <label htmlFor='postal'>
                              Postal
                              <input id='postal' className='value' type='number' value='54547' />
                            </label>
                          </div>
                          <div className='country'>
                            <label htmlFor='country'>
                              Country
                              <input id='country' className='value' type='text' value='Uganda' />
                            </label>
                          </div>
                        </div>
                        <div className='technical_contact'>
                          <div className='section-header'>Technical Contact Person</div>
                          <div className='tech_name'>
                            <label htmlFor='tech_person_name'>
                              Name
                              <input type='text' className='value' id='tech_person_name' value='Bruce Bigirwenkya' />
                            </label>
                          </div>
                          <div className='tech_person_email'>
                            <label htmlFor='tech_person_email'>
                              Email
                              <input type='email' className='value' id='tech_person_email' value='test@gmail.com' />
                            </label>
                          </div>
                        </div>
                        <div className='address'>
                          <div className='section-header'>Address</div>
                          <div className='address1'>
                            <label htmlFor='address1'>
                              Address Line 1
                              <input id='address1' className='value' type='text' value='Juuko Lane' />
                            </label>
                          </div>
                          <div className='address2'>
                            <label htmlFor='address2'>
                              Address Line 2
                              <input id='address2' className='value' type='text' value='' />
                            </label>
                          </div>
                        </div>
                        <div className='legal_contact'>
                          <div className='section-header'>Legal Contact Person</div>
                          <div className='legal_name'>
                            <label htmlFor='legal_person_name'>
                              Name
                              <input type='text' className='value' id='legal_person_name' value='Bruce Bigirwenkya' />
                            </label>
                          </div>
                          <div className='legal_email'>
                            <label htmlFor='legal_person_email'>
                              Email
                              <input type='email' className='value' id='legal_person_email' value='test@gmail.com' />
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
                          <label htmlFor='operationband'>
                            Band of Operation
                          </label>
                          <select name='operationband' id='operationband'>
                            <option value='KHz'>KHz</option>
                            <option value='MHz'>MHz</option>
                            <option value='GHz'>GHz</option>
                          </select>
                        </div>
                        <div className='service'>
                          <label htmlFor='authService'>
                            Service Authorized
                          </label>
                          <select name='authService' className='value' id='authService'>
                            <option value='Fm Broadcasting'>FM Broadcasting</option>
                            <option value='DAB'>DAB</option>
                            <option value='Digital'>Digital TV</option>
                            <option value='Mobile Telephony (2G)'>Mobile Telephony (2G)</option>
                            <option value='Mobile Telephony (3G)'>Mobile Telephony (3G)</option>
                            <option value='Mobile Telephony (LTE)'>Mobile Telephony (LTE)</option>
                            <option value='Microwave'>Microwave</option>
                            <option value='Two way radio'>Two way Radio</option>
                          </select>
                        </div>
                        <div className='modulation'>
                          <label htmlFor='modulationPermitted'>
                            Modulation Permitted
                          </label>
                          <select name='modulationPermitted' className='value' id='modulationPermitted'>
                            <option value='Choice 1'>Choice 1</option>
                            <option value='Choice 2'>Choice 2</option>
                            <option value='Choice 3'>Choice 3</option>
                          </select>
                        </div>
                        { /* eslint-disable enable */}
                        <div className='transPower'>
                          <label htmlFor='transPower'>
                            Assigned Transmission Power (Watts)
                          </label>
                          <input type='number' id='transPower' />
                        </div>
                        <div className='antennaeGain'>
                          <label htmlFor='antennaeGain'>
                            Authorized Antennae Gain (dB)
                          </label>
                          <input type='number' id='antennaeGain' />
                        </div>
                        <div className='antennaeHeight'>
                          <label htmlFor='antennaeHeight'>
                            Authorized Antennae Height (m)
                          </label>
                          <input type='number' id='antennaeHeight' />
                        </div>
                        <div className='transmitLocation'>
                          <label htmlFor='transmitLocation'>
                            Authorized Transmit Location
                          </label>
                          <input type='text' id='transmitLocation' />
                        </div>
                        <div className='stlFrequency'>
                          <label htmlFor='stlFrequency'>
                            Assigned STL Frequency (KHz, MHz, GHz)
                          </label>
                          <input type='number' id='stlFrequency' />
                        </div>
                        <div className='stlPower'>
                          <label htmlFor='stlPower'>
                            Assigned STL Power (Watts)
                          </label>
                          <input type='number' id='stlPower' />
                        </div>
                        <div className='stlLocation'>
                          <label htmlFor='stlLocation'>
                            Assigned STL Location
                          </label>
                          <input type='number' id='stlLocation' />
                        </div>
                        <div className='txAssignDate'>
                          <label htmlFor='txAssignDate'>
                            TX Freq. Assignment Date
                          </label>
                          <input type='date' id='txAssignDate' />
                        </div>
                        <div className='stlAssignDate'>
                          <label htmlFor='stlAssignDate'>
                            STL Freq. Assignment Date
                          </label>
                          <input type='date' id='stlAssignDate' />
                        </div>
                        <div className='assignedBy'>
                          <label htmlFor='assignedBy'>
                            Assigned By
                          </label>
                          <input type='text' id='assignedByFirstName' placeholder='First Name'/>
                          <input type='text' id='assignedByLastName' placeholder='Last Name'/>
                        </div>
                        <div className='authorizedBy'>
                          <label htmlFor='spectrum-authorizedBy'>
                            Authorized By
                          </label>
                          <input type='text' id='authorizedByFirstName' placeholder='First Name'/>
                          <input type='text' id='authorizedByLastName' placeholder='Last Name'/>
                        </div>
                        <div className='spectrum-fullReport'>
                          <label htmlFor='spectrum-fullReport'>
                            Full Report
                          </label>
                          <input type='file' id='spectrum-fullReport' />
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
                          <label htmlFor='status'>
                            Status
                          </label>
                          <select name='status' className='value' id='status'>
                            <option value='Approved'>Approved</option>
                            <option value='Rejected'>Rejected</option>
                          </select>
                        </div>
                        <div className='approveRejectDate'>
                          <label htmlFor='approveRejectDate'>
                            Approval/Rejection Date
                          </label>
                          <input type='date' id='approveRejectDate'/>
                        </div>
                        <div className='TAUniqueID'>
                          <label htmlFor='TAUniqueID'>
                            TA Unique ID
                          </label>
                          <input type='text' id='TAUniqueID'/>
                        </div>
                        <div className='equipmentCategory'>
                          <label htmlFor='equipmentCategory'>
                            Equipment Category
                          </label>
                          <select name='equipmentCategory' className='value' id='equipmentCategory'>
                            <option value='STB'>STB</option>
                            <option value='IDTV'>IDTV</option>
                          </select>
                        </div>
                        <div className='equipmentName'>
                          <label htmlFor='equipmentName'>
                            Equipment Name
                          </label>
                          <input type='text' id='equipmentName'/>
                        </div>
                        <div className='equipmentModel'>
                          <label htmlFor='equipmentModel'>
                            Equipment Model
                          </label>
                          <input type='text' id='equipmentModel'/>
                        </div>
                        <div className='equipmentDesc'>
                          <label htmlFor='equipmentDesc'>
                            Equipment Description
                          </label>
                          <textarea rows='4' cols='50' id='equipmentDesc'/>
                        </div>
                        <div className='applicableStandards'>
                          <label htmlFor='applicableStandards'>
                            Applicable Standard(s)
                          </label>
                          <input type='text' id='applicableStandards'/>
                        </div>
                        <div className='applicantName'>
                          <label htmlFor='applicantName'>
                            Applicant Name
                          </label>
                          <input type='text' id='applicantName'/>
                        </div>
                        <div className='applicantAddress'>
                          <label htmlFor='applicantAddress'>
                            Applicant Address
                          </label>
                          <input type='text' id='applicant-addressline1'/>
                          <input type='text' id='applicant-addressline2'/>
                          <input type='text' id='applicant-city'/>
                          <input type='text' id='applicant-state'/>
                          <input type='number' id='applicant-postal'/>
                          <input type='text' id='applicant-country'/>
                        </div>
                        <div className='typeApproval-fullReport'>
                          <label htmlFor='typeApproval-fullReport'>
                            Full Report
                          </label>
                          <input type='file' id='typeApproval-fullReport'/>
                        </div>
                        <div className='applicantName'>
                          <label htmlFor='applicantName'>
                            TA Certificate
                          </label>
                          <input type='text' id='applicantName'/>
                        </div>
                        <div className='taCertificate'>
                          <label htmlFor='taCertificate'>
                            TA Certificate
                          </label>
                          <input type='file' id='taCertificate' />
                        </div>
                        <div className='assessedBy'>
                          <label htmlFor='assessedBy'>
                            Assessed By
                          </label>
                          <input type='text' id='assessedByFirstName' placeholder='First Name'/>
                          <input type='text' id='assessedByLastName' placeholder='Last Name'/>
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
                          <label htmlFor='serviceCategory'>
                            Service Category
                          </label>
                          <select name='serviceCategory' id='serviceCategory'>
                            <option value='Broadcasting'>Broadcasting</option>
                            <option value='Telecom'>Telecommunications</option>
                            <option value='Postal'>Postal</option>
                          </select>
                        </div>
                        <div className='numberType'>
                          <label htmlFor='numberType'>
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
                          <label htmlFor='serviceName'>
                            Service Name
                          </label>
                          <input type='text' id='serviceName'/>
                        </div>
                        <div className='applicableServiceType'>
                          <label htmlFor='applicableServiceType'>
                            Applicable Service Type
                          </label>
                          <select name='applicableServiceType' id='applicableServiceType'>
                            <option value='Complimentary TV Services'>Complimentary TV Services</option>
                            <option value='Content Provision Services'>Content Provision Services</option>
                            <option value='Core TV Service'>Core TV Service</option>
                            <option value='Emergency and Safety Services'>Emergency and Safety Services</option>
                            <option value='Fixed Subscriber Services'>Fixed Subscriber Services</option>
                            <option value='ISPC'>ISPC</option>
                            <option value='MNC'>MNC</option>
                            <option value='MNO Services'>MNO Services</option>
                            <option value='Mobile Subscriber Services'>Mobile Subscriber Services</option>
                            <option value='NSPC'>NSPC</option>
                            <option value='Premium Subscriber Services'>Premium Subscriber Services</option>
                            <option value='Special Services'>Special Services</option>
                          </select>
                        </div>
                        <div className='serviceDescription'>
                          <label htmlFor='serviceDescription'>
                            Service Description
                          </label>
                          <textarea rows='5' cols='50' id='serviceDescription'/>
                        </div>
                        <div className='assignedRange'>
                          <label htmlFor='assignedRange'>
                            Assigned Range
                          </label>
                          <select name='assignedRange' id='assignedRange'>
                            <option value='Choice 1'>Choice 1</option>
                            <option value='Choice 2'>Choice 2</option>
                            <option value='Choice 3'>Choice 3</option>
                          </select>
                        </div>
                        <div className='assignedNumber'>
                          <label htmlFor='assignedNumber'>
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
                          <label htmlFor='numberAssignDate'>
                            Assignment Date
                          </label>
                          <input type='date' id='numberAssignDate' />
                        </div>
                        <div className='numberingAssignedBy'>
                          <label htmlFor='numberingAssignedBy'>
                            Assigned By
                          </label>
                          <input type='text' id='numberingAssignedByFirstName' placeholder='First Name'/>
                          <input type='text' id='numberingAssignedByLastName' placeholder='Last Name'/>
                        </div>
                        <div className='lastAuthorizationRenewalDate'>
                          <label htmlFor='lastAuthorizationRenewalDate'>
                            Last Authorization Renewal Date
                          </label>
                          <input type='date' id='lastAuthorizationRenewalDate' />
                        </div>
                        <div className='complianceStatus'>
                          <label htmlFor='complianceStatus'>
                            Compliance Status
                          </label>
                          <select name='complianceStatus' id='complianceStatus'>
                            <option value='Compliant'>Compliant</option>
                            <option value='Not Compliant'>Not Compliant</option>
                          </select>
                        </div>
                        <div className='numberingNotes'>
                          <label htmlFor='numberingNotes'>
                            Notes
                          </label>
                          <textarea rows='5' cols='50' id='numberingNotes'/>
                        </div>
                        <div className='numbering-recommendations'>
                          <label htmlFor='numbering-recommendations'>
                            Recommendations
                          </label>
                          <textarea rows='5' cols='50' id='numbering-recommendations'/>
                        </div>
                        <div className='numbering-fullReport'>
                          <label htmlFor='numbering-fullReport'>
                            Full Report
                          </label>
                          <input type='file' id='numbering-fullReport' />
                        </div>
                        <div className='lastUpdated'>
                          <label htmlFor='lastUpdated'>
                            Last Updated
                          </label>
                          <input type='date' id='lastUpdated' />
                        </div>
                        <div className='lastUpdatedBy'>
                          <label htmlFor='lastUpdatedBy'>
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
                          <label htmlFor='callSign'>
                            Call Sign
                          </label>
                          <input type='text' id='broadcasting-callSign'/>
                        </div>
                        <div className='studioLocation'>
                          <label htmlFor='studioLocation'>
                            Studio Location (where applicable)
                          </label>
                          <textarea rows='5' cols='50' id='studioLocation'/>
                        </div>
                        <div className='transmitterLocation'>
                          <label htmlFor='transmitterLocation'>
                            Transmitter Location (where applicable)
                          </label>
                          <textarea rows='5' cols='50' id='transmitterLocation'/>
                        </div>
                        <div className='productionStandard'>
                          <label htmlFor='productionStandard'>
                            BR - Production Standard (If Applicable)
                          </label>
                          <select name='productionStandard' className='value' id='productionStandard'>
                            <option value='Standard Definition'>Standard Definition</option>
                            <option value='High Definition'>High Definition</option>
                          </select>
                        </div>
                        <div className='productionOutputFormat'>
                          <label htmlFor='productionOutputFormat'>
                            BR - Production Output Format (If Applicable)
                          </label>
                          <select name='productionOutputFormat' className='value' id='productionOutputFormat'>
                            <option value='Choice 1'>Choice 1</option>
                            <option value='Choice 2'>Choice 2</option>
                            <option value='Choice 3'>Choice 3</option>
                          </select>
                        </div>
                        <div className='stlMedium'>
                          <label htmlFor='stlMedium'>
                            STL Medium Used (If Applicable)
                          </label>
                          <select name='stlMedium' className='value' id='stlMedium'>
                            <option value='Satellite Link'>Satellite Link</option>
                            <option value='Microwave Link'>Microwave Link</option>
                            <option value='Fiber Cable'>Fiber Cable</option>
                          </select>
                        </div>
                        <div className='authorizedContentDistributor'>
                          <label htmlFor='authorizedContentDistributor'>
                            Authorized Content Distributor
                          </label>
                          <input type='text' id='authorizedContentDistributor'/>
                        </div>
                        <div className='authorizedMuxOperator'>
                          <label htmlFor='authorizedMuxOperator'>
                            Authorized MUX Operator
                          </label>
                          <input type='text' id='authorizedMuxOperator'/>
                        </div>
                        <div className='authorizedSignalDistributor'>
                          <label htmlFor='authorizedSignalDistributor'>
                            Authorized Signal Distributor
                          </label>
                          <input type='text' id='authorizedSignalDistributor'/>
                        </div>
                        <div className='disasterRecoveryPlan'>
                          <label htmlFor='disasterRecoveryPlan'>
                            Disaster Recovery Plan
                          </label>
                          <select name='disasterRecoveryPlan' className='value' id='disasterRecoveryPlan'>
                            <option value='submitted satisfactory'>Submitted (Satisfactory)</option>
                            <option value='submitted not satisfactory'>Submitted (Not Satisfactory)</option>
                            <option value='not submitted'>Not submitted</option>
                          </select>
                        </div>
                        <div className='contentBackupMeasures'>
                          <label htmlFor='contentBackupMeasures'>
                            Content Backup Measures
                          </label>
                          <select name='contentBackupMeasures' className='value' id='contentBackupMeasures'>
                            <option value='Available'>Available</option>
                            <option value='Not Available'>Not Available</option>
                          </select>
                        </div>
                        <div className='equipmentRedundancy'>
                          <label htmlFor='equipmentRedundancy'>
                            Equipment Redundancy
                          </label>
                          <select name='equipmentRedundancy' className='value' id='equipmentRedundancy'>
                            <option value='Available'>Available</option>
                            <option value='Not Available'>Not Available</option>
                          </select>
                        </div>
                        <div className='electroMechSafetyMeasures'>
                          <label htmlFor='electroMechSafetyMeasures'>
                            Electromechanical Safety Measures
                          </label>
                          <select name='electroMechSafetyMeasures' className='value' id='electroMechSafetyMeasures'>
                            <option value='Available'>Available</option>
                            <option value='Not Available'>Not Available</option>
                          </select>
                        </div>
                        <div className='qualityAssuranceMeasures'>
                          <label htmlFor='qualityAssuranceMeasures'>
                            Quality Assurance Measures
                          </label>
                          <select name='qualityAssuranceMeasures' className='value' id='qualityAssuranceMeasures'>
                            <option value='Available'>Available</option>
                            <option value='Not Available'>Not Available</option>
                          </select>
                        </div>
                        <div className='powerBackupEquipment'>
                          <label htmlFor='powerBackupEquipment'>
                            Power Backup Equipment
                          </label>
                          <select name='powerBackupEquipment' className='value' id='powerBackupEquipment'>
                            <option value='Available'>Available</option>
                            <option value='Not Available'>Not Available</option>
                          </select>
                        </div>
                        <div className='accessControl'>
                          <label htmlFor='accessControl'>
                            Access Control for Studio & TR
                          </label>
                          <select name='accessControl' className='value' id='accessControl'>
                            <option value='Available'>Available</option>
                            <option value='Not Available'>Not Available</option>
                          </select>
                        </div>
                        <div className='fireDetectionEquipment'>
                          <label htmlFor='fireDetectionEquipment'>
                            Fire Detection and Protection Equipment
                          </label>
                          <select name='fireDetectionEquipment' className='value' id='fireDetectionEquipment'>
                            <option value='Available'>Available</option>
                            <option value='Not Available'>Not Available</option>
                          </select>
                        </div>
                        <div className='structuredCabling'>
                          <label htmlFor='structuredCabling'>
                            Structured Cabling & Trunking
                          </label>
                          <select name='structuredCabling' className='value' id='structuredCabling'>
                            <option value='Available'>Available</option>
                            <option value='Not Available'>Not Available</option>
                          </select>
                        </div>
                        <div className='electricalInstallationCertificate'>
                          <label htmlFor='electricalInstallationCertificate'>
                            Electrical Installation Certificate
                          </label>
                          <select name='electricalInstallationCertificate' className='value' id='electricalInstallationCertificate'>
                            <option value='Available'>Available</option>
                            <option value='Not Available'>Not Available</option>
                          </select>
                        </div>
                        <div className='airconEquipment'>
                          <label htmlFor='airconEquipment'>
                            Air Conditioning Equipment
                          </label>
                          <select name='airconEquipment' className='value' id='airconEquipment'>
                            <option value='Available'>Available</option>
                            <option value='Not Available'>Not Available</option>
                          </select>
                        </div>
                        <div className='soundProofing'>
                          <label htmlFor='soundProofing'>
                            Sound Proofing & Studio Acoustics
                          </label>
                          <select name='soundProofing' className='value' id='soundProofing'>
                            <option value='Available'>Available</option>
                            <option value='Not Available'>Not Available</option>
                          </select>
                        </div>
                        <div className='towerClimbingAccessories'>
                          <label htmlFor='towerClimbingAccessories'>
                            Tower Color Coding & Climbing Accessories
                          </label>
                          <select name='towerClimbingAccessories' className='value' id='towerClimbingAccessories'>
                            <option value='Available'>Available</option>
                            <option value='Not Available'>Not Available</option>
                          </select>
                        </div>
                        <div className='lastInspectionDate'>
                          <label htmlFor='lastInspectionDate'>
                            Last Inspection Date
                          </label>
                          <input type='date' id='lastInspectionDate' />
                        </div>
                        <div className='broadcastingNotes'>
                          <label htmlFor='broadcastingNotes'>
                            Notes
                          </label>
                          <textarea rows='4' cols='50' id='broadcastingNotes'/>
                        </div>
                        <div className='broadcasting-recommendations'>
                          <label htmlFor='broadcasting-recommendations'>
                            Recommendations
                          </label>
                          <textarea rows='4' cols='50' id='broadcasting-recommendations'/>
                        </div>
                        <div className='broadcasting-fullReport'>
                          <label htmlFor='broadcasting-fullReport'>
                            Full Report
                          </label>
                          <input type='file' id='broadcasting-fullReport' />
                        </div>
                        <div className='inspectedBy'>
                          <label htmlFor='inspectedBy'>
                            Inspected By
                          </label>
                          <input type='text' id='broadcasting-inspectedByFirstName' placeholder='First Name'/>
                          <input type='text' id='broadcasting-inspectedByLastName' placeholder='Last Name'/>
                        </div>
                        <div className='reviewedBy'>
                          <label htmlFor='reviewedBy'>
                            Reviewed By
                          </label>
                          <input type='text' id='broadcasting-reviewedByFirstName' placeholder='First Name'/>
                          <input type='text' id='broadcasting-reviewedByLastName' placeholder='Last Name'/>
                        </div>
                        <div className='approvedBy'>
                          <label htmlFor='approvedBy'>
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
                          <label htmlFor='callSign'>
                            Call Sign
                          </label>
                          <input type='text' id='postal-callSign'/>
                        </div>
                        <div className='physicalLocation'>
                          <label htmlFor='physicalLocation'>
                            Physical Location Requirements
                          </label>
                          <textarea rows='4' cols='50' id='physicalLocation'/>
                        </div>
                        <div className='licenseValidity'>
                          <label htmlFor='licenseValidity'>
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
                          <label htmlFor='articleProtection'>
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
                          <label htmlFor='training'>
                            Training Requirements
                          </label>
                          <select name='training' className='value' id='training'>
                            <option value='Satisfactory'>Satisfactory</option>
                            <option value='None Satisfactory'>None Satisfactory</option>
                          </select>
                        </div>
                        <div className='licenseValidity'>
                          <label htmlFor='qosWorkingDays'>
                            QoS Requirements: Working Days
                          </label>
                          <select name='qosWorkingDays' className='value' id='qosWorkingDays'>
                            <option value='Satisfactory'>Satisfactory</option>
                            <option value='None Satisfactory'>None Satisfactory</option>
                          </select>
                        </div>
                        <div className='qosLiability'>
                          <label htmlFor='qosLiability'>
                            QoS Requirements: Claims/ Liability Handling Policy
                          </label>
                          <select name='qosLiability' className='value' id='qosLiability'>
                            <option value='Satisfactory'>Satisfactory</option>
                            <option value='None Satisfactory'>None Satisfactory</option>
                          </select>
                        </div>
                        <div className='qosProhibited'>
                          <label htmlFor='qosProhibited'>
                            QoS Requirements: Control of Prohibited Items
                          </label>
                          <select name='qosProhibited' className='value' id='qosProhibited'>
                            <option value='Satisfactory'>Satisfactory</option>
                            <option value='None Satisfactory'>None Satisfactory</option>
                          </select>
                        </div>
                        <div className='complaintsRegister'>
                          <label htmlFor='complaintsRegister'>
                            QoS Requirements: Complaints Register
                          </label>
                          <select name='complaintsRegister' className='value' id='complaintsRegister'>
                            <option value='Satisfactory'>Satisfactory</option>
                            <option value='None Satisfactory'>None Satisfactory</option>
                          </select>
                        </div>
                        <div className='postal-notes'>
                          <label htmlFor='postal-notes'>
                            Notes 01
                          </label>
                          <textarea rows='4' cols='50' id='postal-notes'/>
                        </div>
                        <div className='postal-notes2'>
                          <label htmlFor='postal-notes2'>
                            Notes 02
                          </label>
                          <textarea rows='4' cols='50' id='postal-notes2'/>
                        </div>
                        <div className='postal-recommendations'>
                          <label htmlFor='postal-recommendations'>
                            Recommendations
                          </label>
                          <textarea rows='4' cols='50' id='postal-recommendations'/>
                        </div>
                        <div className='postal-fullReport'>
                          <label htmlFor='postal-fullReport'>
                            Full Report
                          </label>
                          <input type='file' id='postal-fullReport' />
                        </div>
                        <div className='inspectedBy'>
                          <label htmlFor='inspectedBy'>
                            Inspected By
                          </label>
                          <input type='text' id='postal-inspectedByFirstName' placeholder='First Name'/>
                          <input type='text' id='postal-inspectedByLastName' placeholder='Last Name'/>
                        </div>
                        <div className='reviewedBy'>
                          <label htmlFor='reviewedBy'>
                            Reviewed By
                          </label>
                          <input type='text' id='postal-reviewedByFirstName' placeholder='First Name'/>
                          <input type='text' id='postal-reviewedByLastName' placeholder='Last Name'/>
                        </div>
                        <div className='approvedBy'>
                          <label htmlFor='approvedBy'>
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
                          <label htmlFor='serviceDetails'>
                            Details of Service Provided
                          </label>
                          <textarea rows='4' cols='50' id='serviceDetails'/>
                        </div>
                        <div className='serviceTech'>
                          <label htmlFor='serviceTech'>
                            Service Technology, Equipment Interface & Type Approval
                          </label>
                          <textarea rows='4' cols='50' id='serviceTech'/>
                        </div>
                        <div className='statusQOS'>
                          <label htmlFor='statusQOS'>
                            Status on QoS Requirements
                          </label>
                          <textarea rows='4' cols='50' id='statusQOS'/>
                        </div>
                        <div className='coverageArea'>
                          <label htmlFor='coverageArea'>
                            Coverage area details
                          </label>
                          <textarea rows='4' cols='50' id='coverageArea'/>
                        </div>
                        <div className='sharing'>
                          <label htmlFor='sharing'>
                            Interconnection and Facility Sharing Requirements
                          </label>
                          <textarea rows='4' cols='50' id='sharing'/>
                        </div>
                        <div className='protectionStatus'>
                          <label htmlFor='protectionStatus'>
                            Status on Protection of Public Operator Facilities
                          </label>
                          <textarea rows='4' cols='50' id='protectionStatus'/>
                        </div>
                        <div className='summaryEssentialResourceAuth'>
                          <label htmlFor='summaryEssentialResourceAuth'>
                            Summary on Authorizations for Essential Resources
                          </label>
                          <textarea rows='4' cols='50' id='summaryEssentialResourceAuth'/>
                        </div>
                        <div className='outageStatus'>
                          <label htmlFor='outageStatus'>
                            Status on Outages/ Interruption of Operations
                          </label>
                          <textarea rows='4' cols='50' id='outageStatus'/>
                        </div>
                        <div className='outageReports'>
                          <label htmlFor='outageReports'>
                            Outage Reports
                          </label>
                          <input type='file' id='outageReports' />
                        </div>
                        <div className='emergencyRequirements'>
                          <label htmlFor='emergencyRequirements'>
                            Emergency Services & Disaster Requirements
                          </label>
                          <textarea rows='4' cols='50' id='emergencyRequirements'/>
                        </div>
                        <div className='generalProvisions'>
                          <label htmlFor='generalProvisions'>
                            General Provisions
                          </label>
                          <textarea rows='4' cols='50' id='generalProvisions'/>
                        </div>
                        <div className='telecom-notes'>
                          <label htmlFor='telecom-notes'>
                            Notes
                          </label>
                          <textarea rows='4' cols='50' id='telecom-notes'/>
                        </div>
                        <div className='telecom-recommendations'>
                          <label htmlFor='telecom-recommendations'>
                            Recommendations
                          </label>
                          <textarea rows='4' cols='50' id='telecom-recommendations'/>
                        </div>
                        <div className='telecom-fullReport'>
                          <label htmlFor='telecom-fullReport'>
                            Full Report
                          </label>
                          <input type='file' id='telecom-fullReport' />
                        </div>
                        <div className='inspectedBy'>
                          <label htmlFor='inspectedBy'>
                            Inspected By
                          </label>
                          <input type='text' id='telecom-inspectedByFirstName' placeholder='First Name'/>
                          <input type='text' id='telecom-inspectedByLastName' placeholder='Last Name'/>
                        </div>
                        <div className='reviewedBy'>
                          <label htmlFor='reviewedBy'>
                            Reviewed By
                          </label>
                          <input type='text' id='telecom-reviewedByFirstName' placeholder='First Name'/>
                          <input type='text' id='telecom-reviewedByLastName' placeholder='Last Name'/>
                        </div>
                        <div className='telecom-authorizedBy'>
                          <label htmlFor='telecom-authorizedBy'>
                            Approved By
                          </label>
                          <input type='text' id='telecom-authorizedByFirstName' placeholder='First Name'/>
                          <input type='text' id='telecom-authorizedByLastName' placeholder='Last Name'/>
                        </div>
                      </div>
                    </div>

                  </div>
                </form>
              </div>
              <div className='card'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
              <div className='card'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
              <div className='card'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
              <div className='card'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
              <div className='card'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
              <div className='card'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
              <div className='card'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
              <div className='card'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
              <div className='card'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
              <div className='card'>
                <div className='avatar'>
                  <div className='user__image' />
                </div>
              </div>
              <div className='loader' />
            </div>
          </article>
          <aside className='personal_actions'>
            <div className='notifications' />
            <div className='graphs' />
          </aside>
        </div>
      </main>
    </div>
  </div>
);

export default withRouter(Home);
