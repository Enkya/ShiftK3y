import Entries from '../containers/Entries';

import {
  LEGAL,
  ECI,
  SPECTRUM,
} from '../constants/roles';
import NewEntry from '../containers/NewEntry';
import CompanyDetails from '../containers/CompanyDetails';

const pageInfo = {
  pages: [
    {
      title: 'All Entries',
      url: '/',
      component: Entries,
    },
    {
      title: 'Company Details',
      url: '/companies/:id',
      component: CompanyDetails,
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      component: Entries,
    },
    {
      title: 'New Entry',
      url: '/new',
      component: NewEntry,
      menuIcon: '',
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
