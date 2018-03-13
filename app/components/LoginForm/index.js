import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import { required, email } from 'utils/validateForm';
import Button from 'material-ui-next/Button';
import { TextField } from 'redux-form-material-ui';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

class LoginForm extends Component {
  componentDidMount() {
    this.ref // the Field
      .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
      .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
      .focus() // on TextField
  }

  saveRef = ref => (this.ref = ref)

  render() {
    const { handleSubmit, isSubmitting, error } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div className="field-line">
          <Field
            name="email"
            type="email"
            component={TextField}
            hintText="Email"
            floatingLabelText="Email"
            validate={[required, email]}
            ref={this.saveRef}
            withRef
          />
        </div>
        <div className="field-line">
          <Field
            name="password"
            type="password"
            component={TextField}
            hintText="Password"
            floatingLabelText="Password"
            validate={required}
          />
        </div>
        <div className="button-line">
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
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool
}

export default LoginForm
