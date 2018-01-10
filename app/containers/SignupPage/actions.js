/*
 *
 * SignupPage actions
 *
 */

import {
  SIGN_UP,
  SIGN_UP_OK,
  SIGN_UP_FAILED
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of SIGN_UP
 */
export function submitSignupForm() {
  return {
    type: SIGN_UP,
  };
}

/**
 * Submit the form ok
 *
 * @return {object}    An action object with a type of SIGN_UP_OK
 */
export function submitSignupFormOk() {
  return {
    type: SIGN_UP_OK,
  }
}

/**
 * Submit the form failed
 *
 * @return {object}    An action object with a type of SIGN_UP_FAILED
 */
export function submitSignupFormFailed(err) {
  return {
    type: SIGN_UP_FAILED,
    payload: err
  }
}