/**
 * LoginPage selectors
 */

import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';

const selectLogin = (state) => state.get('login');

const formSelector = formValueSelector('login');
const valuesSelector = (state) => formSelector(state, 'email', 'password');

/**
 * Other specific selectors
 */
export const makeSelectSigninValues = () => createSelector(
  valuesSelector,
  (values) => values
);

const makeSelectShouldRedirect = () => createSelector(selectLogin, (loginState) => loginState.get('shouldRedirect'));

const makeSelectSubmitting = () => createSelector(selectLogin, (loginState) => loginState.get('submitting'));

const makeSelectError = () => createSelector(selectLogin, (loginState) => loginState.get('error'));

export { selectLogin, makeSelectShouldRedirect, makeSelectSubmitting, makeSelectError };
