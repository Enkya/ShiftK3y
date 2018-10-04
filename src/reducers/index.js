import { combineReducers } from 'redux-immutable';
import pageInfoReducer from './pageInfoReducer';
import userProfileReducer from './userProfileReducer';


const rootReducer = combineReducers({
  pageInfoReducer,
  userProfileReducer,
});

export default rootReducer;
