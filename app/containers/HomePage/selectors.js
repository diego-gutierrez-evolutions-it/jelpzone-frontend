/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('homePage');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const makeSelectUserExtraInformation = () => createSelector(
  selectHome,
  (homeState) => homeState.get('userExtraInformation')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectUserExtraInformation
};
