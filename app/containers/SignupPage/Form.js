import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';

import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import messages from './messages';
import {required, email} from 'utils/validateForm';

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const renderSelectField = (
  { input, label, meta: { touched, error }, children, ...custom },
) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

const SignupForm = props => {
  const { handleSubmit, pristine, reset, isSubmitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="username"
          component={renderTextField}
          label={<FormattedMessage {...messages.userNameFieldText} />}
          validate={required}
        />
      </div>
      <div>
        <Field
          name="email"
          component={renderTextField}
          label={<FormattedMessage {...messages.emailFieldText} />}
          validate={[required, email]}  />
      </div>
      <div>
        <Field
          name="password"
          component={renderTextField}
          label={<FormattedMessage {...messages.passwordFieldText} />}
          validate={required}  />
      </div>
      <div>
        <Field name="userType" component={renderRadioGroup} validate={required}>
          <RadioButton value="0" label={<FormattedMessage {...messages.userTypeProText} />} />
          <RadioButton value="1" label={<FormattedMessage {...messages.userTypeCliText} />} />
        </Field>
      </div>
      <div>
        <RaisedButton
            type="submit"
            disabled={isSubmitting}
            label={<FormattedMessage {...messages.submitButtonText} />}
            primary
          />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'signup', // a unique identifier for this form
})(SignupForm);
