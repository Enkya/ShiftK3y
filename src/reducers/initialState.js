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
    entries: [
      {
        id: 'fjg',
        company: 'Santa',
        status: 'compliant',
        resource: 91.5,
        report: '/report.pdf',
        services: 'Commercial Radio',
        category: 'FM Radio',
        address1: 'test',
        address2: 'test',
        country: 'test',
        district: 'test',
        legalPersonEmail: 'undefined',
        legalPersonName: 'undefined',
        postal: '',
        techPersonEmail: 'undefined',
        techPersonName: 'undefined',
      },
    ],
  },
};

export default initialState;
