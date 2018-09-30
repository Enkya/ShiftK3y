import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
  tenant: 'brucebigirwenkyahotmail.onmicrosoft.com',
  clientId: '1bb2787b-90de-4d3f-9b65-523fe99b9cfe',
  endpoints: {
    api: '14d71d65-f596-4eae-be30-27f079bf8d4b',
  },
  cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) => {
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);
};

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
