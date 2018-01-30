/*
 * SignupPage Messages
 *
 * This contains all the text for the SignupPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  submitButtonText: {
  	id: 'app.containers.SignupPage.submit_button',
    defaultMessage: 'Submit',
  },
  resetButtonText: {
  	id: 'app.containers.SignupPage.reset_button',
    defaultMessage: 'Clear Values',
  },
  noHandledErrorResponse: {
  	id: 'app.containers.SignupPage.internal_server_error',
    defaultMessage: 'The user could not be created',
  }
});
