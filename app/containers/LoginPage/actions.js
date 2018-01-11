/*
 * Login Actions
 *
 */

import { SUBMIT_FORM, SUBMIT_FORM_OK, SUBMIT_FORM_FAILED } from './constants';

/**
 * Submitting the form
 *
 * @return {object}    An action object with a type of SUBMIT_FORM
 */
export function submitLoginForm() {
  return {
    type: SUBMIT_FORM,
  };
}

/**
 * Submit the form ok
 *
 * @return {object}    An action object with a type of CHANGE_PASSWORD
 */
export function submitLoginFormOk() {
  return {
    type: SUBMIT_FORM_OK,
  };
}

/**
 * Submit the form failed
 *
 * @return {object}    An action object with a type of CHANGE_PASSWORD
 */
export function submitLoginFormFailed(err) {
  return {
    type: SUBMIT_FORM_FAILED,
    payload: err,
  };
}
