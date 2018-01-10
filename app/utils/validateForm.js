import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';

export const messages = defineMessages({
  errorRequiredField: {
    id: 'jelpzone.utils.LoginForm.error.required_field',
    defaultMessage: 'Required',
  },
  errorInvalidaEmailField: {
    id: 'jelpzone.utils.LoginForm.error.email_field',
    defaultMessage: 'Invalid email format',
  }
});

export const required = (value) => (value == null ? <FormattedMessage {...messages.errorRequiredField} /> : undefined);

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? (
    <FormattedMessage {...messages.errorInvalidaEmailField} />
  ) : (
    undefined
  );