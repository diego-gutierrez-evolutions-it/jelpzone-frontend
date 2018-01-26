/**
 * Submitting the sign up form
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import { isNil } from 'lodash';

import request from 'utils/request';
import { makeSelectSigninValues } from './selectors';

import { SUBMIT_FORM } from './constants';
import { submitLoginFormOk, submitLoginFormFailed } from './actions';

/**
 * Sign up request/response handler
 */
export function* submitForm() {
  // Select username and password from redux form
  const values = yield select(makeSelectSigninValues());
  //TODO: lift this from configuration file
  const requestURL = 'http://localhost:4000/api/Users/login';

  try {

    // Call our request helper (see 'utils/request')
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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
