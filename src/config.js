const baseConfig = {
  ICON_CDN: '',
};

const configs = {
  production: {
    AUTH_API: process.env.AUTH_API || '',
    APP_URL: process.env.APP_URL || '',
    API_BASE_URL: process.env.API_BASE_URL || 'https://shiftk3yapi.herokuapp.com/api/v1',
  },
  development: {
    AUTH_API: process.env.AUTH_API || '',
    APP_URL: process.env.APP_URL || '',
    API_BASE_URL: process.env.API_BASE_URL || 'http://127.0.0.1:5000/api/v1',
  },
  testing: {
    AUTH_API: process.env.TESTING_AUTH_API || '',
    APP_URL: process.env.TESTING_APP_URL || '',
    API_BASE_URL: process.env.TESTING_API_BASE_URL || '',
  },

};

const envConfig = configs[process.env.NODE_ENV];
const config = { ...baseConfig, ...envConfig };

export default config;
