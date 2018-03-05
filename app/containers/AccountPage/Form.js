import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';
import { map, filter, indexOf, first, isUndefined } from 'lodash';

import { withStyles } from 'material-ui-next/styles';
import TextField from 'material-ui-next/TextField';
import Radio, { RadioGroup } from 'material-ui-next/Radio';
import Checkbox from 'material-ui-next/Checkbox';
import SelectField from 'material-ui-next/Select';
import Button from 'material-ui-next/Button';
import { MenuItem } from 'material-ui-next/Menu';

import Input, { InputLabel } from 'material-ui-next/Input';
import Chip from 'material-ui-next/Chip';

import {required, email, confirmPassword} from 'utils/validateForm';

import messages from './messages';

const renderTextField = ({ input: {value, ...rest}, label, meta: { touched, error }, ...custom  }) => {
  return(
    <TextField
      label={label}
      error={touched && error}
      defaultValue={value}
      {...rest}
      {...custom}
    />
  );
}

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

const renderRadioGroup = ({ input, children, meta }) => {
  return (
    <RadioGroup
      {...input}
      children={children}
      value={input.value}
      {... meta}
      onChange={(event, value) => input.onChange(value)}
    />
  );
}

const renderSelectChipField = ({ input, label, meta: { touched, error }, children, defaultValue, inputField,...custom }) => {
  return (
    <SelectField
      label={label}
      error={touched && error}
      {...input}
      input={inputField}
      value={defaultValue}
      children={children}
      {...custom}
    />
  );
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export class AccountForm extends React.Component {

  state = {
    professions: [],
  };

  componentDidMount() {
    this.setState({ professions: this.props.accountValues.professions });
  }

  handleChange = (event) => {
    this.setState({ professions: filter(this.props.professions, (v) => indexOf(event.target.value, v.id) >= 0) });
  };

  render(){

    const { 
      handleSubmit, 
      reset, 
      isSubmitting,
      classes,
      theme,
      professions,
      accountValues,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="firstName"
            component={renderTextField}
            label="First Name"
            defaultValue={accountValues.firstName}
          />
        </div>
        <div>
          <Field 
            name="lastName" 
            component={renderTextField} 
            label="Last Name" 
            defaultValue={accountValues.lastName}
          />
        </div>
        <div>
          <Field 
            name="address" 
            component={renderTextField} 
            label="Address"
            defaultValue={accountValues.address}
          />
        </div>
        <div>
          <Field 
            name="email" 
            component={renderTextField} 
            label="Email"
            disabled
            defaultValue={accountValues.email}  />
        </div>
        <div>
          <Field 
            component={renderSelectChipField}
            name="professions" 
            label="professions"
            multiple
            defaultValue={map(this.state.professions,'id')}
            onChange={this.handleChange.bind(this)}
            inputField={<Input id="select-multiple-chip" />}
            MenuProps={MenuProps}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => {
                  if(this.props.professions.length){
                    const filtered = first(filter(this.props.professions, (v) => (!isUndefined(v) && value == v.id)));
                    return (
                      <Chip key={value} label={filtered.name} className={classes.chip} />
                    )
                  }
                })}
              </div>
            )} 
          >
            {professions.map(profession => (
              <MenuItem
                key={profession.id}
                value={profession.id}
                style={{
                  fontWeight:
                    this.state.professions.indexOf(profession) === -1
                      ? theme.typography.fontWeightRegular
                      : theme.typography.fontWeightMedium,
                }}
              >
                {profession.name}
              </MenuItem>
            ))}
          </Field>
        </div>
        <div>
          {this.props.children}
        </div>
        <div>
          <Button
            variant="raised"
            disabled={isSubmitting}
            onClick={reset}
            color="secondary"
          >
            <FormattedMessage {...messages.resetButtonText} />
          </Button>
          <Button
            variant="raised"
            type="submit"
            disabled={isSubmitting}
            color="primary"
          >
            <FormattedMessage {...messages.submitButtonText} />
          </Button>
        </div>
      </form>
    ); 
  }
};

AccountForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func, 
  reset: PropTypes.func, 
  isSubmitting: PropTypes.bool,
  professions: PropTypes.any.isRequired,
  accountValues: PropTypes.shape(
    { firstName: PropTypes.string },
    { lastName: PropTypes.string },
    { address: PropTypes.string },
    { email: PropTypes.string },
    { professions: PropTypes.array },
  ),
};

AccountForm = withStyles(styles, { withTheme: true })(AccountForm);

export default reduxForm({
  form: 'account', // a unique identifier for this form
})(AccountForm);