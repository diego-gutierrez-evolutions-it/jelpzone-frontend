/*
 *
 * SignupPage reducer
 *
 */

import { fromJS } from 'immutable';
import { includes } from 'lodash';
import {
  SIGN_UP,
  SIGN_UP_OK,
  SIGN_UP_FAILED
} from './constants';

// The initial state of the App
const initialState = fromJS({
  submitting: false,
  registerOk: false,
  error: false,
  messageError: ''
});

function signupPageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return state.set('submitting', true)
                  .set('registerOk', false)
                  .set('error', false)
                  .set('messageError', '');

    case SIGN_UP_OK:
      return state.set('submitting', false)
                  .set('registerOk', true)
                  .set('error', false);

    case SIGN_UP_FAILED:
      let messageError = 'Another problem';
      if(includes(action.payload.toString(),'Failed to fetch')){ //api rest down

        messageError = 'Communication problem with API REST';

      } else if(action.payload.response.status === 422){ //problem fields

        /*
         * We muste set the field problem in the state. See action.payload.response.json()
         */
        messageError = 'Unprocessable Entity';

      }

      return state.set('submitting', false)
                  .set('registerOk', false)
                  .set('error', true)
                  .set('messageError', messageError);

    default:
      return state;
  }
}

export default signupPageReducer;
