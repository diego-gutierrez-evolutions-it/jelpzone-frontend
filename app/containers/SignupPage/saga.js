/**
 * Submitting the sign up form
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import { isNil, includes } from 'lodash';

import { SIGN_UP, URL_SIGN_UP } from './constants';
import { submitSignupFormOk, submitSignupFormFailed } from './actions';

import request from 'utils/request';
import { makeSelectSignupValues } from './selectors';

/**
 * Sign up request/response handler
 */
export function* submitForm() {
  // Select username from store
  const values = yield select(makeSelectSignupValues());
  
  // lift this from configuration file
  const requestURL = process.env.config.jelpzoneApi.url+URL_SIGN_UP;

  try {

    // Call our request helper (see 'utils/request')
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values.firstName+' '+values.lastName,
        username: values.username,
        professional: (values.userType == 0)? false:true,
        email: values.email,
        password: values.password
      })
    };

    const user = yield call(request, requestURL, options);

    if(!isNil(user.id)){

      yield put(submitSignupFormOk());

    } else{

      const error = new Error(500);
      error.response = {
        message: <FormattedMessage {...messages.noHandledErrorResponse} />
      }
      throw error;

    }

    //yield put(submitSignupFormOk());
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
