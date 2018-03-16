/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS, List, Map } from 'immutable';
import { isEmpty } from 'lodash';

import {
  TOGGLE_EXTRA_INFORMATION,
  LOAD_ALL_PROFESSIONALS,
  LOAD_ALL_PROFESSIONALS_SUCCESS,
  LOAD_ALL_PROFESSIONALS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  professionals: [],
  loadingProfessionals: false,
  errorLoadingProfessionals: false,
  userExtraInformation: {}
});

function homeReducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_ALL_PROFESSIONALS:
      return state
        .set('loadingProfessionals', true)
        .set('errorLoadingProfessionals', false);
    case LOAD_ALL_PROFESSIONALS_SUCCESS:
      return state
        .set('professionals', fromJS(action.payload))
        .set('loadingProfessionals', false)
        .set('errorLoadingProfessionals', false);
    case LOAD_ALL_PROFESSIONALS_ERROR:
      return state
        .set('loadingProfessionals', false)
        .set('errorLoadingProfessionals', true);

    case TOGGLE_EXTRA_INFORMATION:

      // filter professionals by action id (clicked mark)
      let selectedProfesional = state.get('professionals').filter(function (professional) { 
        return professional.get('id') == action.payload.id; 
      }).first();

      // if is selected => i will deselect it
      if((selectedProfesional.get('id') && !isEmpty(state.get('userExtraInformation'))) 
        && (selectedProfesional.get('id') == state.get('userExtraInformation').get('id'))
      ){
        return state
          .set('userExtraInformation',fromJS({}));
      } else{
        // else i will select it
        return state
          .set('userExtraInformation', fromJS(selectedProfesional));
      }      
      
    default:
      return state;
  }
}

export default homeReducer;
