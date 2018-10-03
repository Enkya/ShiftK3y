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
});

export default initialState;
