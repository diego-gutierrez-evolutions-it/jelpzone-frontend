/**
 * Submitting the sign up form
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { isNil } from 'lodash';
import { FormattedMessage } from 'react-intl';
import request from 'utils/request';
import { setUser } from 'utils/navigatorStore';

import { AUTH_USER } from 'containers/App/constants';
import { submitLoginFormOk, submitLoginFormFailed, loadingUser } from 'containers/App/actions';
import { makeSelectSigninValues } from './selectors';
import { URL_USER_LOGIN } from './constants';
import messages from './messages';


/**
 * Sign up request/response handler
 */
export function* submitForm() {
  // Select username and password from redux form
  const values = yield select(makeSelectSigninValues());

  // lift this from configuration file
  const requestURL = process.env.config.jelpzoneApi.url + URL_USER_LOGIN;

  try {
    // Call our request helper (see 'utils/request')
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    };

    const user = yield call(request, requestURL, options);

    if (!isNil(user.id)) {
      // save token into session storage
      setUser(user);

      // loading user information from global component App
      yield put(loadingUser());
    } else { // TODO: add errors handler
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
