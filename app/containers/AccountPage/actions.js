/*
 * AccountPage Actions
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
  LOAD_ALL_PROFESSIONS,
  LOAD_ALL_PROFESSIONS_SUCCESS,
  LOAD_ALL_PROFESSIONS_ERROR
} from './constants';

/**
 * Load the professionals, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ALL_PROFESSIONS
 */
export function loadProfessionalsList() {
  return {
    type: LOAD_ALL_PROFESSIONS,
  };
}

/**
 * Load the professionals ok
 *
 * @return {object} An action object with a type of LOAD_ALL_PROFESSIONS_SUCCESS
 */
export function professionalsLoaded(data) {
  return {
    type: LOAD_ALL_PROFESSIONS_SUCCESS,
    payload: data
  }
}

/**
 * Load the professionals failed
 *
 * @return {object} An action object with a type of LOAD_ALL_PROFESSIONS_ERROR
 */
export function professionalsLoadingError(err) {
  return {
    type: LOAD_ALL_PROFESSIONS_ERROR,
    payload: err
  }
}
