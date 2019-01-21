import { createSelector } from 'reselect';
import initialState from '../reducers/initialState';

const selectUserProfile = () => initialState.userProfile;

const makeSelectUserProfile = () => createSelector(
  selectUserProfile, userInfoState => userInfoState.roles,
);

export default makeSelectUserProfile;
