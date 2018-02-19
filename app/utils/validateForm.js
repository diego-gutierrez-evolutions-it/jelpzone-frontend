import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import { includes } from 'lodash';

export const messages = defineMessages({
  errorRequiredField: {
    id: 'jelpzone.utils.LoginForm.error.required_field',
    defaultMessage: 'Required',
  },
  errorInvalidaEmailField: {
    id: 'jelpzone.utils.LoginForm.error.email_field',
    defaultMessage: 'Invalid email format',
  },
  errorConfirmPasswordField: {
    id: 'jelpzone.utils.LoginForm.error.confirm_password_field',
    defaultMessage: 'Passwords must match',
  },
});

export const required = (value) => (value == null ? <FormattedMessage {...messages.errorRequiredField} /> : undefined);

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? (
    <FormattedMessage {...messages.errorInvalidaEmailField} />
  ) : (
    undefined
  );

export const confirmPassword = (value, allValues) => {
  (value === allValues.get('password')) ? (
    undefined
  ) : (
    <FormattedMessage {...messages.errorConfirmPasswordField} />
  )
}
