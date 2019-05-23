import {
  FETCH_COMPANY_DETAILS_FAILURE,
  FETCH_COMPANY_DETAILS_SUCCESS,
  FETCH_COMPANY_DETAILS_REQUEST,
} from '../types';
import initialState from './initialState';

/**
* @function entry
* entry reducer
*
* @param {Object} state companyDetails initial state
* @param {Object} action
* @returns {Object} entry state
*/
const companyDetails = (state = initialState.entry, action) => {
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
    return {
      ...state,
      requesting: false,
      entry: action.entry,
    };
  }
  default:
    return state;
  }
};

export default companyDetails;
