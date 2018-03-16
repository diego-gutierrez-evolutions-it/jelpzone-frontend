import { takeLatest, call, put, select } from 'redux-saga/effects';

import { isNil, isUndefined } from 'lodash';

import {
  LOAD_ALL_PROFESSIONS,
  URL_GET_PROFESSIONS,
  ACCOUNT_UPDATE,
  URL_PUT_ACCOUNT_UPDATE,
} from 'containers/AccountPage/constants';
import {
  professionalsLoaded,
  professionalsLoadingError,
  submitUpdateAccountFormOk,
  submitUpdateAccountFormFailed,
} from 'containers/AccountPage/actions';

import request from 'utils/request';
import { getUser } from 'utils/navigatorStore';

import { makeSelectAccountValues, makeSelectUploadFiles } from './selectors';

/**
 * Professionals list request/response handler
 */
export function* getProfessionalsList() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
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
 * Account update request/response handler
 */
export function* submitForm() {
  // Select username from store
  const values = yield select(makeSelectAccountValues());
  const files = yield select(makeSelectUploadFiles());

  // lift this from configuration file
  const requestURL = `${process.env.config.jelpzoneApi.url + URL_PUT_ACCOUNT_UPDATE} / ${getUser().userId}`;

  try {
    // TODO**: handle errors of a better way
    if (files.size >= 4) {
      const error = new Error(400);
      error.response = {
        message: "You can't load more than 4 pictures",
      };
      throw error;
    }

    // Call our request helper (see 'utils/request')
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
        professions: values.professions,
      }),
    };

    const user = yield call(request, requestURL, options);

    if (!isNil(user.id)) {
      const data = new FormData();
      files.forEach((file) => {
        data.append('file', file);
      });

      const options = {
        method: 'POST',
        body: data,
      };

      const filesResponse = yield call(request, `${process.env.config.jelpzoneApi.url} Users/upload`, options);

      yield put(submitUpdateAccountFormOk());
    } else {
      // TODO**: handle errors of a better way
      const error = new Error(500);
      error.response = {
        message: 'Esto es un error no personalizado',
      };
      throw error;
    }
  } catch (err) {
    yield put(submitUpdateAccountFormFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootWatcher() {
  // Watches for LOAD_ALL_PROFESSIONS actions and calls getProfessionalsList when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield [
    takeLatest(LOAD_ALL_PROFESSIONS, getProfessionalsList),
    takeLatest(ACCOUNT_UPDATE, submitForm),
  ];
}