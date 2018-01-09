/*
 * Login Actions
 *
 */

import { SUBMIT_FORM, SUBMIT_FORM_OK, SUBMIT_FORM_FAILED } from './constants'

/**
 * Submit the form
 *
 * @param {Object} values - The form values.
 * @param {string} values.email - The user email.
 * @param {string} values.password - The user password.
 *
 * @return {object}    An action object with a type of CHANGE_PASSWORD
 */
export function submitLoginForm(values) {

  //TODO: make api calls here
  return (dispatch) => {

    dispatch(submittingLoginForm())

    if(values.get('email') === 'john@email.com' && values.get('password') === 'doe'){
      dispatch(submitLoginFormOk())
    } else{
      dispatch(submitLoginFormFailed("Incorrect user or password"))
    }
  }

}

/**
 * Submitting the form
 *
 * @return {object}    An action object with a type of SUBMIT_FORM
 */
export function submittingLoginForm() {

  return {
    type: SUBMIT_FORM
  }

}


/**
 * Submit the form ok
 *
 * @return {object}    An action object with a type of CHANGE_PASSWORD
 */
export function submitLoginFormOk() {
  return {
    type: SUBMIT_FORM_OK,
  }
}

/**
 * Submit the form failed
 *
 * @return {object}    An action object with a type of CHANGE_PASSWORD
 */
export function submitLoginFormFailed(err) {
  return {
    type: SUBMIT_FORM_FAILED,
    payload: err
  }
}
