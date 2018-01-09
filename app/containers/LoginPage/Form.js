import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formValueSelector, reduxForm } from 'redux-form/immutable'
import { bindActionCreators } from 'redux'

import * as LoginFormActions from './actions'

import LoginForm from 'components/LoginForm'

import { makeSelectShouldRedirect, makeSelectSubmitting } from './selectors'

let Form = reduxForm({
  form: 'login',
})(LoginForm)

const selector = formValueSelector('login')

Form = connect(state => {
  return {
    //email: selector(state, 'email'),
    //password: selector(state, 'password'),
    submitting: makeSelectSubmitting()
  }
})(Form)

export default Form
