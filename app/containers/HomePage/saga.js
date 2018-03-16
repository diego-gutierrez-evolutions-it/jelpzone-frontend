/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_ALL_PROFESSIONALS, URL_GET_PROFESSIONALS } from './constants';
import { professionalsLoaded, professionalsLoadingError } from './actions';

import request from 'utils/request';
import { getUser } from 'utils/navigatorStore';

/**
 * Get professionals request/response handler
 */
export function* getProfessionals() {

  let user = getUser(),
      token = (user !== null)? user.id:false;

  if(!token || token === '') {//if there is no token, dont bother
    return;
  }

  const requestURL = process.env.config.jelpzoneApi.url + URL_GET_PROFESSIONALS;

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

  try {
    // Call our request helper (see 'utils/request')
    const professionals = yield call(request, requestURL, options);
    yield put(professionalsLoaded(professionals));
  } catch (err) {
    yield put(professionalsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* professionalsData() {
  // Watches for LOAD_ALL_PROFESSIONALS actions and calls getProfessionals when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_ALL_PROFESSIONALS, getProfessionals);
}
