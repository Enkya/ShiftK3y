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
                          <label htmlFor='authorizedBy'>
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
                        <div className='numberingRecommendations'>
                          <label htmlFor='numberingRecommendations'>
                            Recommendations
                          </label>
                          <textarea rows='5' cols='50' id='numberingRecommendations'/>
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
                      {/* TBD */}
                      </div>
                    </div>
                    <div className='postal section'>
                      <div className='title'>
                        <span>Technical Postal</span>
                      </div>
                      <div className='details'>
                        
                      </div>
                    </div>
                    <div className='telecom section'>
                      <div className='title'>
                        <span>Technical Telecom</span>
                      </div>
                      <div className='details'>
                      {/* TBD */}
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
