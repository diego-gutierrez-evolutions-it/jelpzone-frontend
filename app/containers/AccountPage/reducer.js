/*
 *
 * AccountPage reducer
 *
 */

import { fromJS } from 'immutable';
import { values } from 'lodash';
import {
  LOAD_ALL_PROFESSIONS_SUCCESS,
} from './constants';

const initialState = fromJS({
	professions: []
});

function accountPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_PROFESSIONS_SUCCESS:
      return state
          .set('professions', values(action.payload));
    default:
      return state;
  }
}

export default accountPageReducer;
