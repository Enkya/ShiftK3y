import { combineReducers } from 'redux';
import pageInfo from './pageInfoReducer';
import userProfile from './userProfileReducer';
import entries from './entriesReducer';


const rootReducer = combineReducers({
  pageInfo,
  userProfile,
  entries,
});

export default rootReducer;
