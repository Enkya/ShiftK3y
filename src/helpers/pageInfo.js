import NotFound from '../containers/NotFound';

import {
  LEGAL,
  ECI,
  SPECTRUM,
} from '../constants/roles';

const pageInfo = {
  pages: [
    {
      title: 'Not Found',
      component: NotFound,
    },
    {
      title: 'Spectrum',
      url: '/spectrum',
      component: '',
      menuIcon: '',
      allowedRoles: [SPECTRUM, ECI],
    },
    {
      title: 'Companies',
      url: '/companies',
      component: '',
      menuIcon: '',
      allowedRoles: [LEGAL],
    },
  ],
};

export default pageInfo;
