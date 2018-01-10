/**
 * Submitting the sign up form
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import { SIGN_UP } from './constants';
import { submitSignupFormOk, submitSignupFormFailed } from './actions';

import request from 'utils/request';
import { makeSelectSignupValues } from './selectors';

/**
 * Sign up request/response handler
 */
export function* submitForm() {
  // Select username from store
  const values = yield select(makeSelectSignupValues());
  //const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {

    // Call our request helper (see 'utils/request')
    //TODO
    //const repos = yield call(request, requestURL);
    const error = new Error(400);
    if(values.username == 'john'){

      error.response = {
        "message": "The username already exists, select another one"
      }
      throw error;

    } else if(values.email == 'john@email.com'){

      error.response = {
        "message": "The email is already registered"
      }
      throw error;

    }

    yield put(submitSignupFormOk());
  } catch (err) {
    yield put(submitSignupFormFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* submitSignupForm() {
  // Watches for SIGN_UP actions and calls submitForm when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SIGN_UP, submitForm);
}
