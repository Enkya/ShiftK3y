import { createSelector } from 'reselect';
import initialState from '../reducers/initialState';

export const selectUserProfile = state => state.get('userProfile', initialState);

export const makeSelectUserProfile = () => createSelector(
  selectUserProfile, userInfoState => userInfoState.get('roles'),
);
