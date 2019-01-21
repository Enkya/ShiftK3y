import { TITLE_CHANGE } from '../types';
import initialState from './initialState';

const pageInfo = (state = initialState.pageInfo, action) => {
  switch (action.type) {
  case TITLE_CHANGE:
    return action.data;
  default:
    return state;
  }
};

export default pageInfo;
