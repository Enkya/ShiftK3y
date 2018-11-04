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
              Licensing
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
                        <span>Spectrum</span>
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
                            <option value='KHz'>KHz</option>
                            <option value='MHz'>MHz</option>
                            <option value='GHz'>GHz</option>
                          </select>
                        </div>
                        <div className='modulation'>
                          <label htmlFor='modulationPermitted'>
                            Modulation Permitted
                          </label>
                          <select name='modulationPermitted' className='value' id='modulationPermitted'>
                            <option value='KHz'>KHz</option>
                            <option value='MHz'>MHz</option>
                            <option value='GHz'>GHz</option>
                          </select>
                        </div>
                        { /* eslint-disable enable */}
                        <div className='transPower'>
                          <label htmlFor='transPower'>
                            Assigned Transmission Power
                          </label>
                          <input type='text' id='transPower' />
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
