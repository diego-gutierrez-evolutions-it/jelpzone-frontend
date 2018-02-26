/**
 * Submitting the sign up form
 */

import { call, put, select, takeLatest, fork, take } from 'redux-saga/effects';

import { isNil } from 'lodash';

import { FormattedMessage } from 'react-intl';

import request from 'utils/request';
import { setUser, getUser } from 'utils/navigatorStore';

import { loadingUserOk, loadingUserFailed } from 'containers/App/actions';
import { 
  LOAD_CURRENT_USER, 
  LOAD_CURRENT_USER_SUCCESS, 
  LOAD_CURRENT_USER_ERROR,
  LOGOUT_USER,
  URL_USER_FROM_TOKEN 
} from 'containers/App/constants';

import { URL_USER_LOGIN } from './constants';
import { makeSelectSigninValues } from './selectors';

/**
 * On LOAD_CURRENT_USER action fires this method
 */
export function* loadCurrentUserWatcher() {

  let user = getUser(),
      token = (user !== null)? user.id:false,
      userId = (user !== null)? user.userId:false;

  if(!token || token === '') {//if there is no token, dont bother
    return;
  }

  // lift this from configuration file
  const requestURL = process.env.config.jelpzoneApi.url + URL_USER_FROM_TOKEN + userId;

  try {

    // Call our request helper (see 'utils/request')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      queryParams:{
        filter: "{\"include\": \"professions\"}"
      }
    }

    const user = yield call(request, requestURL, options);

    if (!isNil(user.id)) {

      // let other components know that we got user and things are fine
      yield put(loadingUserOk(user));

    }

  } catch (err) {
    yield put(loadingUserFailed(err));
  }

}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootWatcher() {
  yield takeLatest(LOAD_CURRENT_USER, loadCurrentUserWatcher);
}
