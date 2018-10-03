import * as AuthenticationContext from 'adal-angular/lib';

window.config = {
  tenant: process.env.TENANT || 'brucebigirwenkyahotmail.onmicrosoft.com',
  clientId: process.env.CLIENT_ID || '',
  endpoints: {
    api: '14d71d65-f596-4eae-be30-27f079bf8d4b',
  },
  cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(config);
