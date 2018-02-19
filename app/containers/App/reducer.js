/*
 * AppReducer
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

import {
  LOAD_CURRENT_USER,
  LOAD_CURRENT_USER_SUCCESS,
  LOAD_CURRENT_USER_ERROR,
  AUTH_USER,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  currentUser: null,
  loading: false,
  error: false,
  authToken: null,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CURRENT_USER:
    case AUTH_USER:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_CURRENT_USER_SUCCESS:
    case AUTH_USER_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('currentUser', action.payload.user)
        .set('authToken', action.payload.user.auth_token);
    case AUTH_USER_ERROR:
      return state
        .set('loading', false)
        .set('error', action.payload.error);
    case LOGOUT_USER_ERROR:
    case LOAD_CURRENT_USER_ERROR:
      return state
        .set('currentUser', null) // TODO: Setted with null to redirect to login form
        .set('loading', false); // No error passed because I don't really care, for me it is just information that the user is not logged in - in other cases this should be solved differently
    case LOGOUT_USER_SUCCESS:
      return state
        .set('currentUser', null)
        .set('authToken', null);
    default:
      return state;
  }
}

export default authReducer;
