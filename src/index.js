import { runWithAdal } from 'react-adal';
import { authContext } from './adal/adalConfig';

const DO_NOT_LOGIN = false;

runWithAdal(authContext, () => {
  // eslint-disable-next-line
  require('./indexApp.jsx');
}, DO_NOT_LOGIN);
