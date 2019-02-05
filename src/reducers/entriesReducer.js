import {
  CREATE_ENTRY_REQUEST,
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_FAILURE,
  FETCH_ENTRIES_REQUEST,
  FETCH_ENTRIES_SUCCESS,
  FETCH_ENTRIES_FAILURE,
  DELETE_ENTRY_REQUEST,
  DELETE_ENTRY_SUCCESS,
  DELETE_ENTRY_FAILURE,
  EDIT_ENTRY_REQUEST,
  EDIT_ENTRY_SUCCESS,
  EDIT_ENTRY_FAILURE,
} from '../types';
import initialState from './initialState';

/**
 * @function entries
 * entries reducer
 *
 * @param {Object} state entries initial state
 * @param {Object} action
 * @returns {Object} entries state
 */
const entries = (state = initialState.entries, action) => {
  switch (action.type) {
  case FETCH_ENTRIES_REQUEST:
    return {
      ...state,
      requesting: true,
    };
  case FETCH_ENTRIES_FAILURE:
    return {
      ...state,
      requesting: false,
      error: action.error,
    };
  case FETCH_ENTRIES_SUCCESS:
    return {
      ...state,
      requesting: false,
      entries: action.entries,
    };
  case CREATE_ENTRY_REQUEST:
    return {
      ...state,
      requesting: true,
      message: {
        type: 'info',
        text: 'Creating ...',
      },
    };
  case CREATE_ENTRY_FAILURE:
    return {
      ...state,
      requesting: false,
      message: {
        type: 'error',
        text: action.error.response ? action.error.response.data.message : 'An error has occurred',
      },
    };
  case CREATE_ENTRY_SUCCESS: {
    return {
      ...state,
      requesting: false,
      entries: [...state.entries, action.entry],
      message: {
        type: 'success',
        text: 'Entry Created Successfully',
      },
    };
  }
  case DELETE_ENTRY_REQUEST:
    return {
      ...state,
      updating: true,
    };
  case DELETE_ENTRY_FAILURE:
    return {
      ...state,
      updating: false,
      error: action.error,
    };
  case DELETE_ENTRY_SUCCESS: {
    const updatedCategories = state.entries.filter(entry => (
      entry.id !== action.id
    ));
    return {
      ...state,
      updating: false,
      entries: updatedCategories,
    };
  }
  case EDIT_ENTRY_REQUEST:
    return {
      ...state,
      updating: true,
    };
  case EDIT_ENTRY_SUCCESS: {
    const updatedCategories = state.entries.map(entry => (
      entry.id !== action.entry.id ? entry : action.entry
    ));
    return {
      ...state,
      updating: false,
      message: {
        type: 'success',
        text: 'Entry edited successfully.',
      },
      entries: updatedCategories,
    };
  }
  case EDIT_ENTRY_FAILURE:
    return {
      ...state,
      updating: false,
      error: action.error.response
        ? action.error.response.data.message
        : 'An error has occured while completing your request.',
    };
  default:
    return state;
  }
};

export default entries;
