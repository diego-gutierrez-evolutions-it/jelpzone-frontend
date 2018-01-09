/*
 * LoginPageReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { SUBMIT_FORM, SUBMIT_FORM_OK, SUBMIT_FORM_FAILED } from './constants';

// The initial state of the App
const initialState = fromJS({
  submitting: false,
  loggedIn: false,
  shouldRedirect: false,
  error: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_FORM_OK:
  		return state.set('loggedIn', true)
  								.set('shouldRedirect', true)
  								.set('submitting', false);
  	case SUBMIT_FORM_FAILED:
  		return state.set('loggedIn', false)
  								.set('shouldRedirect', false)
  								.set('error', true)
  								.set('submitting', false);
    case SUBMIT_FORM:
      // Delete prefixed '@' from the github username
      return state.set('submitting', true)
                  .set('error', false);
    default:
      return state;
  }
}

export default loginReducer;
