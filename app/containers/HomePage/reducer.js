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
import { fromJS } from 'immutable';

import {
  TOGGLE_EXTRA_INFORMATION
} from './constants';

// The initial state of the App
const initialState = fromJS({
  professionals: '',
  userExtraInformation: {}
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_EXTRA_INFORMATION:

      // filter professionals by action id (clicked mark)
      let selectedProfesional = state.get('professionals').filter(function (professional) { 
        return professional.id == action.id; 
      });

      // if is selected => i will deselect it
      if(selectedProfesional.id == state.get('userExtraInformation').id){
        return state
          .set('userExtraInformation',{});
      }

      // else i will select it
      return state
        .set('userExtraInformation', selectedProfesional);
      
    default:
      return state;
  }
}

export default homeReducer;
