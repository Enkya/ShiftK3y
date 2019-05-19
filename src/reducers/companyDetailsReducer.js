import {
  FETCH_COMPANY_DETAILS_FAILURE,
  FETCH_COMPANY_DETAILS_SUCCESS,
  FETCH_COMPANY_DETAILS_REQUEST,
} from '../types';
import initialState from './initialState';

/**
* @function entries
* entries reducer
*
* @param {Object} state companyDetails initial state
* @param {Object} action
* @returns {Object} entries state
*/
const companyDetails = (state = initialState.entries, action) => {
  switch (action.type) {
  case FETCH_COMPANY_DETAILS_REQUEST:
    return {
      ...state,
      requesting: true,
    };
  case FETCH_COMPANY_DETAILS_FAILURE:
    return {
      ...state,
      requesting: false,
      error: action.error,
    };
  case FETCH_COMPANY_DETAILS_SUCCESS: {
    const updatedEntries = state.entries.map(entry => (
      entry.id !== action.company.id ? entry : action.entry
    ));
    return {
      ...state,
      updating: false,
      message: {
        type: 'success',
        text: 'Entry edited successfully.',
      },
      entries: updatedEntries,
    };
  }
  default:
    return state;
  }
};

export default companyDetails;
