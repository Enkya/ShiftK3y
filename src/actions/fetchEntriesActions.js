import axios from 'axios';

import {
  FETCH_ENTRIES_REQUEST,
  FETCH_ENTRIES_FAILURE,
  FETCH_ENTRIES_SUCCESS,
} from '../types';
import config from '../config';
import IS_NOT_READY from '../helpers/release';

/**
 * @function fetchEntriesRequest
 * @return {Object} {{type: FETCH_ENTRIES_REQUEST}}
 */
export const fetchEntriesRequest = () => (
  {
    type: FETCH_ENTRIES_REQUEST,
  }
);

/**
 * Fetch Entries failure action creator
 * @function fetchEntriesFailure
 * @param {Object} error - Error object with error information
 * @return {Object} {{type: FETCH_ENTRIES_FAILURE, error: error}}
 */
export const fetchEntriesFailure = error => (
  {
    type: FETCH_ENTRIES_FAILURE,
    error,
  }
);

/**
 * @function fetchEntriesSuccess
 * @param {Object} entries - object with info on fetchd entries
 * @return {Object} {{type: FETCH_ENTRIES_SUCCESS, bool: bool}}
 */
export const fetchEntriesSuccess = entries => (
  {
    type: FETCH_ENTRIES_SUCCESS,
    entries,
  }
);


/**
 * fetch entries thunk
 * @param {Object} entries object with form data for fetchd entries
 * @returns {(dispatch) => Promise<AxiosResponse>}
 */
export const fetchEntries = () => (
  (dispatch) => {
    dispatch(fetchEntriesRequest());
    return axios.get(`${config.API_BASE_URL}/posts`)
      .then((response) => {
        const data = IS_NOT_READY('API_ENDPOINT') ? response.data.splice(0, 5) : response.data;
        dispatch(fetchEntriesSuccess(data));
      })
      .catch((error) => { dispatch(fetchEntriesFailure(error)); });
  }
);
