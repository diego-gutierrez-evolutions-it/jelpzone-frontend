/**
 * Submitting the sign up form
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { makeSelectSigninValues } from './selectors';

import { SUBMIT_FORM } from './constants';
import { submitLoginFormOk, submitLoginFormFailed } from './actions';

/**
 * Sign up request/response handler
 */
export function* submitForm() {
  // Select username from store
  const values = yield select(makeSelectSigninValues());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    // TODO
    // const repos = yield call(request, requestURL);
    if ((values.email === 'john@email.com') && (values.password === 'doe')) {
      yield put(submitLoginFormOk());
    } else {
      const error = new Error(400);

      error.response = {
        message: 'Incorrect user or passwor',
      };
      throw error;
    }
  } catch (err) {
    yield put(submitLoginFormFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* submitLoginForm() {
  yield takeLatest(SUBMIT_FORM, submitForm);
}
