import axios from 'axios';

import {
  CREATE_ENTRY_REQUEST,
  CREATE_ENTRY_FAILURE,
  CREATE_ENTRY_SUCCESS,
} from '../types';
import config from '../config';

/**
 * @function createEntryRequest
 * @return {Object} {{type: CREATE_ENTRY_REQUEST}}
 */
export const createEntryRequest = () => (
  {
    type: CREATE_ENTRY_REQUEST,
  }
);

/**
 * Create Entry failure action creator
 * @function createEntryFailure
 * @param {Object} error - Error object with error information
 * @return {Object} {{type: CREATE_ENTRY_FAILURE, error: error}}
 */
export const createEntryFailure = error => (
  {
    type: CREATE_ENTRY_FAILURE,
    error,
  }
);

/**
 * @function createEntrySuccess
 * @param {Object} entry - object with info on created entry
 * @return {Object} {{type: CREATE_ENTRY_SUCCESS, bool: bool}}
 */
export const createEntrySuccess = entry => (
  {
    type: CREATE_ENTRY_SUCCESS,
    entry,
  }
);


/**
 * create entry thunk
 * @param {Object} entry object with form data for created entry
 * @returns {(dispatch) => Promise<AxiosResponse>}
 */
export const createEntry = entry => (
  (dispatch) => {
    dispatch(createEntryRequest());
    const url = `${config.API_BASE_URL}/companies`;
    return axios.post(url, entry)
      .then(() => {
        dispatch(createEntrySuccess(entry));
      })
      .catch((error) => { dispatch(createEntryFailure(error)); });
  }
);
