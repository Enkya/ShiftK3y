const initialState = {
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
  entries: {
    requesting: false,
    entries: [],
  },
};

export default initialState;
