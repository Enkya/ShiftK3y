import Home from '../containers/Home';

import {
  LEGAL,
  ECI,
  SPECTRUM,
} from '../constants/roles';

const pageInfo = {
  pages: [
    {
      title: 'Home',
      url: '/dashboard',
      component: Home,
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
