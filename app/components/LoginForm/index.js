import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable'
import { FormattedMessage } from 'react-intl'

import RaisedButton from 'material-ui/RaisedButton'
import { TextField } from 'redux-form-material-ui'

import messages from './messages'

// validation functions
const required = value => (value == null ? <FormattedMessage {...messages.errorRequiredField} /> : undefined)

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? (
    <FormattedMessage {...messages.errorInvalidaEmailField} />
  ) : (
    undefined
  )

class LoginForm extends Component {
  componentDidMount() {
    this.ref // the Field
      .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
      .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
      .focus() // on TextField
  }

  saveRef = ref => (this.ref = ref)

  render() {
    const { handleSubmit, submitting, error } = this.props
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
          <RaisedButton
            type="submit"
            disabled={submitting}
            label={<FormattedMessage {...messages.submitButtonText} />}
            primary
          />
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool
}

export default LoginForm
