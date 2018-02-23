import { takeLatest, call, put, select } from 'redux-saga/effects';

import { LOAD_ALL_PROFESSIONS, URL_GET_PROFESSIONS } from 'containers/AccountPage/constants';
import { professionalsLoaded, professionalsLoadingError } from 'containers/AccountPage/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getProfessionalsList() {
  // Select username from store
  //const username = yield select(makeSelectUsername());
  const requestURL = process.env.config.jelpzoneApi.url + URL_GET_PROFESSIONS;

  try {
    // Call our request helper (see 'utils/request')
    const professionals = yield call(request, requestURL);
    yield put(professionalsLoaded(professionals));
  } catch (err) {
    yield put(professionalsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* professionalsList() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_ALL_PROFESSIONS, getProfessionalsList);
}