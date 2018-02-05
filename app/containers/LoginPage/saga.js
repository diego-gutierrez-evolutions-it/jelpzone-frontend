/**
 * Submitting the sign up form
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import { isNil } from 'lodash';

import { FormattedMessage } from 'react-intl';

import request from 'utils/request';
import { setUser, getUser } from 'utils/navigatorStore';

import { makeSelectSigninValues } from './selectors';

import { AUTH_USER } from 'containers/App/constants';
import { URL_USER_LOGIN } from './constants';
import { submitLoginFormOk, submitLoginFormFailed } from 'containers/App/actions';

/**
 * Sign up request/response handler
 */
export function* submitForm() {
  
  // Select username and password from redux form
  const values = yield select(makeSelectSigninValues());

  // lift this from configuration file
  const requestURL = process.env.config.jelpzoneApi.url+URL_USER_LOGIN;

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

      // save token into session storage
      // TODO: modify with the real value from api rest
      setUser(user);

      // let other components know that we got user and things are fine
      yield put(submitLoginFormOk(user));

    } else { //TODO: add errors handler
      const error = new Error(400);

      error.response = {
        message: <FormattedMessage {...messages.invalidCredentials} />,
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
  yield takeLatest(AUTH_USER, submitForm);
}
