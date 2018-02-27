/*
 *
 * AccountPage reducer
 *
 */

import { fromJS } from 'immutable';
import { values } from 'lodash';
import {
  LOAD_ALL_PROFESSIONS_SUCCESS,
  ACCOUNT_UPDATE,
  ACCOUNT_UPDATE_OK,
  ACCOUNT_UPDATE_FAILED
} from './constants';

const initialState = fromJS({
	professions: [],
	updatedAccountOk: false,
	updatedAccountError: false,
});

function accountPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_PROFESSIONS_SUCCESS:
      return state
          .set('professions', values(action.payload));
    case ACCOUNT_UPDATE:
    	return state
          .set('updatedAccountOk', false)
          .set('updatedAccountError', false);
    case ACCOUNT_UPDATE_OK:
    	return state
          .set('updatedAccountOk', true)
          .set('updatedAccountError', false);
    case ACCOUNT_UPDATE_FAILED:
    	return state
          .set('updatedAccountOk', false)
          .set('updatedAccountError', true);
    default:
      return state;
  }
}

export default accountPageReducer;
