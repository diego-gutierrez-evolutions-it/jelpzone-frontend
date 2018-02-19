/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_CURRENT_USER,
  LOAD_CURRENT_USER_SUCCESS,
  LOAD_CURRENT_USER_ERROR,
  AUTH_USER,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
} from './constants';

/**
 * Submitting the form
 *
 * @return {object} An action object with a type of AUTH_USER
 */
export function submitLoginForm() {
  return {
    type: AUTH_USER,
  };
}

/**
 * Submit the form ok
 *
 * @return {object} An action object with a type of AUTH_USER_SUCCESS
 */
export function submitLoginFormOk(user) {
  return {
    type: AUTH_USER_SUCCESS,
    payload: {
      user: user
    },
  };
}

/**
 * Submit the form failed
 *
 * @return {object} An action object with a type of AUTH_USER_ERROR
 */
export function submitLoginFormFailed(err) {
  return {
    type: AUTH_USER_ERROR,
    payload: {
      error: err,
    },
  };
}

/**
 * Logout user
 *
 * @return {object} An action object with a type of LOGOUT_USER
 */
export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

/**
 * Logout user ok
 *
 * @return {object} An action object with a type of LOGOUT_USER_SUCCESS
 */
export function logoutUserOk() {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
}

/**
 * Logout user failed
 *
 * @return {object} An action object with a type of LOGOUT_USER_ERROR
 */
export function logoutUserFailed() {
  return {
    type: LOGOUT_USER_ERROR,
  };
}

/**
 * Loading user
 *
 * @return {object} An action object with a type of LOAD_CURRENT_USER
 */
export function loadingUser() {
  return {
    type: LOAD_CURRENT_USER,
  };
}

/**
 * Loading user ok
 *
 * @return {object} An action object with a type of LOAD_CURRENT_USER_SUCCESS
 */
export function loadingUserOk(user) {
  return {
    type: LOAD_CURRENT_USER_SUCCESS,
    payload: {
      user: user,
    },
  };
}

/**
 * Loading user failed
 *
 * @return {object} An action object with a type of LOAD_CURRENT_USER_ERROR
 */
export function loadingUserFailed(err) {
  return {
    type: LOAD_CURRENT_USER_ERROR,
    payload: {
      error: err,
    },
  };
}
