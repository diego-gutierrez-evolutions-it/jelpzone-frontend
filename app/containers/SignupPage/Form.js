import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';

import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { required, email, confirmPassword } from 'utils/validateForm';

import messages from './messages';

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
    checked={!!input.value}
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

const SignupForm = (props) => {
  const { handleSubmit, pristine, reset, isSubmitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
        />
      </div>
      <div>
        <Field
          name="lastName"
          component={renderTextField}
          label="Last Name"
        />
      </div>
      <div>
        <Field
          name="username"
          component={renderTextField}
          label="Username"
          validate={required}
        />
      </div>
      <div>
        <Field
          name="email"
          component={renderTextField}
          label="Email"
          validate={[required, email]} />
      </div>
      <div>
        <Field name="userType" component={renderRadioGroup} validate={required}>
          <RadioButton value="0" label="client" />
          <RadioButton value="1" label="professional" />
        </Field>
      </div>
      <div>
        <Field
          name="password"
          component={renderTextField}
          label="Password"
          validate={required}
          type="password"
        />
      </div>
      <div>
        <Field
          name="confirmPassword"
          component={renderTextField}
          label="Confirm Password"
          validate={[required, confirmPassword]}
          type="password"
        />
      </div>
      <div>
        <RaisedButton
          type="submit"
          disabled={isSubmitting}
          label={<FormattedMessage {...messages.submitButtonText} />}
          primary
        />
        <RaisedButton
          disabled={isSubmitting}
          label={<FormattedMessage {...messages.resetButtonText} />}
          onClick={reset}
          secondary
        />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'signup', // a unique identifier for this form
})(SignupForm);
