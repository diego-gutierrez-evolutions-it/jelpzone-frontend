import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formValueSelector, reduxForm } from 'redux-form/immutable'
import { bindActionCreators } from 'redux'

import LoginForm from 'components/LoginForm'

import { createStructuredSelector } from 'reselect';
import { makeSelectLoading } from 'containers/App/selectors';

let Form = reduxForm({
  form: 'login',
})(LoginForm)

const mapStateToProps = createStructuredSelector({
  isSubmitting: makeSelectLoading()
})

Form = connect(mapStateToProps)(Form)

export default Form
