import Entries from '../containers/Entries';

import {
  LEGAL,
  SPECTRUM,
} from '../constants/roles';

const sectionInfo = {
  sections: [
    {
      title: 'Companies',
      url: '/companies',
      component: '',
      form: '',
      allowedRoles: [LEGAL],
    },
    {
        title: 'Spectrum Compliance',
        url: '/spectrum',
        component: '',
        form: '',
        allowedRoles: [SPECTRUM],
    },
  ],
};

export default sectionInfo;
