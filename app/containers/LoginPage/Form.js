import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formValueSelector, reduxForm } from 'redux-form/immutable'
import { bindActionCreators } from 'redux'

import * as LoginFormActions from './actions'

import LoginForm from 'components/LoginForm'

import { createStructuredSelector } from 'reselect'
import { makeSelectShouldRedirect, makeSelectSubmitting } from './selectors'

let Form = reduxForm({
  form: 'login',
})(LoginForm)

const mapStateToProps = createStructuredSelector({
  isSubmitting: makeSelectSubmitting()
})

Form = connect(mapStateToProps)(Form)

export default Form
