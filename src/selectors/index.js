import { createSelector } from 'reselect';

const selectUserProfile = state => state.userProfile;

const getEntriesRequesting = state => state.entries.requesting;

export const makeSelectUserProfile = createSelector(
  selectUserProfile, userInfoState => userInfoState.info,
);


export const getUpdateLoader = createSelector(
  [getEntriesRequesting], entriesRequesting => entriesRequesting || false,
);
