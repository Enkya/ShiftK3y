import { combineReducers } from 'redux';
import pageInfo from './pageInfoReducer';
import userProfile from './userProfileReducer';
import entries from './entriesReducer';
import entry from './companyDetailsReducer';


const rootReducer = combineReducers({
  pageInfo,
  userProfile,
  entries,
  entry,
});

export default rootReducer;
