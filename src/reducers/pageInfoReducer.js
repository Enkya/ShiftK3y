import { fromJS } from 'immutable';

import { TITLE_CHANGE } from '../types';

const initialState = fromJS({
  pageInfo: {
    title: 'Home',
    url: '/',
    roles: {},
  },
});

const pageInfo = (state = initialState, action) => {
  switch (action.type) {
  case TITLE_CHANGE:
    return action.data;
  default:
    return state;
  }
};

export default pageInfo;
