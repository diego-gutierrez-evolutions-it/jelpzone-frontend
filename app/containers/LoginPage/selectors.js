/**
 * LoginPage selectors
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectShouldRedirect = () => createSelector(selectLogin, (loginState) => loginState.get('shouldRedirect'));

const makeSelectSubmitting = () => createSelector(selectLogin, (loginState) => loginState.get('submitting'));

const makeSelectError = () => createSelector(selectLogin, (loginState) => loginState.get('error'));

export { selectLogin, makeSelectShouldRedirect, makeSelectSubmitting, makeSelectError };
