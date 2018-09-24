const baseConfig = {
  ICON_CDN: '',
};

const configs = {
  production: {
    AUTH_API: '',
    APP_URL: '',
    API_BASE_URL: '',
  },
  development: {
    AUTH_API: '',
    APP_URL: '',
    API_BASE_URL: '',
  },
  testing: {
    AUTH_API: '',
    APP_URL: '',
    API_BASE_URL: '',
  },

};

const envConfig = configs[process.env.NODE_ENV];
const config = { ...baseConfig, ...envConfig };

export default config;
