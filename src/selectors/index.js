import { createSelector } from 'reselect';

const selectUserProfile = state => state.userProfile;

const getEntriesRequesting = state => state.entries.requesting;

const entriesMessage = state => state.entries.message;

export const makeSelectUserProfile = createSelector(
  selectUserProfile, userInfoState => userInfoState.info,
);


export const getUpdateLoader = createSelector(
  [getEntriesRequesting], entriesRequesting => entriesRequesting || false,
);

export const getMessage = createSelector(
  [entriesMessage], message => message,
);
