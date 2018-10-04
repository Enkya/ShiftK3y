import AuthenticationContext_ from 'adal-angular/lib/adal';
import config from '../config';

export const adalConfig = {
  tenant: process.env.TENANT || 'brucebigirwenkyahotmail.onmicrosoft.com',
  clientId: process.env.OFFICE_CLIENT_ID || '1bb2787b-90de-4d3f-9b65-523fe99b9cfe',
  redirectUri: config.API_BASE_URL || 'http://localhost:3000/',
  localLoginUrl: config.APP_URL,
  popUp: true,
  endpoints: {
    api: '14d71d65-f596-4eae-be30-27f079bf8d4b',
  },
  cacheLocation: 'localStorage',
};

const AuthenticationContext = AuthenticationContext_;
export const authContext = () => new AuthenticationContext(adalConfig);
