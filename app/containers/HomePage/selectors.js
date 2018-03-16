/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

export const selectHome = (state) => state.get('homePage');

export const makeSelectUserExtraInformation = () => createSelector(
  selectHome,
  (homeState) => homeState.get('userExtraInformation')
);

export const makeSelectProfessionals = () => createSelector(
  selectHome,
  (homeState) => homeState.get('professionals')
);
