import axios from 'axios';

import {
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_SUCCESS,
} from '../types';

import config from '../config';

/**
 * @function fetchDetailsRequest
 * @return {Object} {{type: FETCH_DETAILS_REQUEST}}
 */
export const fetchDetailsRequest = () => (
  {
    type: FETCH_DETAILS_REQUEST,
  }
);

/**
 * Fetch Details failure action creator
 * @function fetchDetailsFailure
 * @param {Object} error - Error object with error information
 * @return {Object} {{type: FETCH_DETAILS_FAILURE, error: error}}
 */
export const fetchDetailsFailure = error => (
  {
    type: FETCH_DETAILS_FAILURE,
    error,
  }
);

/**
 * @function fetchDetailsSuccess
 * @param {Object} entries - object with info on fetchd entries
 * @return {Object} {{type: FETCH_DETAILS_SUCCESS, bool: bool}}
 */
export const fetchDetailsSuccess = entries => (
  {
    type: FETCH_DETAILS_SUCCESS,
    entries,
  }
);


/**
 * fetch entries thunk
 * @param {Object} entries object with form data for fetchd entries
 * @returns {(dispatch) => Promise<AxiosResponse>}
 */
export const fetchDetails = () => (
  (dispatch) => {
    dispatch(fetchDetailsRequest());
    return axios.get(`${config.API_BASE_URL}/companies`)
      .then((response) => {
        dispatch(fetchDetailsSuccess(response.data.data));
      })
      .catch((error) => { dispatch(fetchDetailsFailure(error)); });
  }
);
