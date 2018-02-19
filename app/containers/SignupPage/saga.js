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
  // Select username and password from redux form
  const values = yield select(makeSelectSigninValues());
  //TODO: lift this from configuration file
  const requestURL = 'http://localhost:4000/api/Users';

  try {

    // Call our request helper (see 'utils/request')
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password
      })
    }

    const user = yield call(request, requestURL, options);

    if (!isNil(user.id)) {
      yield put(submitLoginFormOk());
    } else { //TODO: add errors handler
      const error = new Error(400);

      error.response = {
        message: 'Incorrect user or password',
      };
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
