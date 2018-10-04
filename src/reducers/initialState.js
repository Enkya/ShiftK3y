import { fromJS } from 'immutable';

const initialState = fromJS({
  userProfile: {
    info: {
      roles: {
        ECI: 'ECI',
      },
    },
    error: {},
  },
  pageInfo: {
    title: 'Home',
    url: '/',
  },
});

export default initialState;
