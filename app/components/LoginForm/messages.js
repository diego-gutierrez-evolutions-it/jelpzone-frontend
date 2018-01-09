/*
 * LoginForm Messages
 *
 * This contains all the text for the LoginForm component.
 */
import { defineMessages } from 'react-intl'

export default defineMessages({
  errorRequiredField: {
    id: 'jelpzone.components.LoginForm.error.required_field',
    defaultMessage: 'Required',
  },
  errorInvalidaEmailField: {
    id: 'jelpzone.components.LoginForm.error.email_field',
    defaultMessage: 'Invalid email format',
  },
  submitButtonText: {
    id: 'jelpzone.components.LoginForm.submit_button.text',
    defaultMessage: 'Log in',
  },
})
