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
  TOGGLE_EXTRA_INFORMATION
} from './constants';

// The initial state of the App
const initialState = fromJS({
  professionals: [
    {
      id: 1,
      latitude: -34.62,
      longitude: -58.42,
    },
    {
      id: 2,
      latitude: -34.63,
      longitude: -58.44,
    }
  ],
  userExtraInformation: {}
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
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
          .set('userExtraInformation',{});
      } else{
        // else i will select it
        return state
          .set('userExtraInformation', selectedProfesional);
      }      
      
    default:
      return state;
  }
}

export default homeReducer;
