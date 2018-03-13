import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';

/**
 * Direct selector to the signupPage state domain
 */
export const selectSignup = (state) => state.get('signup');

const formSelector = formValueSelector('signup');
const valuesSelector = (state) => formSelector(state, 'firstName', 'lastName', 'username', 'email', 'userType', 'password');

/**
 * Other specific selectors
 */
export const makeSelectSignupValues = () => createSelector(
  valuesSelector,
  (values) => values
);

export const makeSelectSubmitting = () => createSelector(
  selectSignup,
  (signupState) => signupState.get('submitting')
);

export const makeSelectRegisterOk = () => createSelector(
  selectSignup,
  (signupState) => signupState.get('registerOk')
);

export const makeSelectError = () => createSelector(
  selectSignup,
  (signupState) => signupState.get('error')
);

export const makeSelectMessageError = () => createSelector(
  selectSignup,
  (signupState) => signupState.get('messageError')
);
