import axios from 'axios';

import {
  FETCH_COMPANY_DETAILS_REQUEST,
  FETCH_COMPANY_DETAILS_FAILURE,
  FETCH_COMPANY_DETAILS_SUCCESS,
} from '../types';

import config from '../config';

/**
 * @function fetchCompanyDetailsRequest
 * @return {Object} {{type: FETCH_DETAILS_REQUEST}}
 */
export const fetchCompanyDetailsRequest = () => (
  {
    type: FETCH_COMPANY_DETAILS_REQUEST,
  }
);

/**
 * Fetch Details failure action creator
 * @function fetchCompanyDetailsFailure
 * @param {Object} error - Error object with error information
 * @return {Object} {{type: FETCH_DETAILS_FAILURE, error: error}}
 */
export const fetchCompanyDetailsFailure = error => (
  {
    type: FETCH_COMPANY_DETAILS_FAILURE,
    error,
  }
);

/**
 * @function fetchCompanyDetailsSuccess
 * @param {Object} entries - object with info on fetchd entries
 * @return {Object} {{type: FETCH_DETAILS_SUCCESS, bool: bool}}
 */
export const fetchCompanyDetailsSuccess = entries => (
  {
    type: FETCH_COMPANY_DETAILS_SUCCESS,
    entries,
  }
);


/**
 * fetch entries thunk
 * @param {Object} entries object with form data for fetchd entries
 * @returns {(dispatch) => Promise<AxiosResponse>}
 */
export const fetchCompanyDetails = companyId => (
  (dispatch) => {
    dispatch(fetchCompanyDetailsRequest());
    return axios.get(`${config.API_BASE_URL}/companies/${companyId}`)
      .then((response) => {
        dispatch(fetchCompanyDetailsSuccess(response.data));
      })
      .catch((error) => { dispatch(fetchCompanyDetailsFailure(error)); });
  }
);
