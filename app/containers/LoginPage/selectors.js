/**
 * LoginPage selectors
 */

import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';

const formSelector = formValueSelector('login');
const valuesSelector = (state) => formSelector(state, 'email', 'password');

/**
 * Other specific selectors
 */
export const makeSelectSigninValues = () => createSelector(
  valuesSelector,
  (values) => values
);
