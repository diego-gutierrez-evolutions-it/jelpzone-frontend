/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types'
/*import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';*/
import { connect } from 'react-redux'
import { compose } from 'redux'
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect'

import injectReducer from 'utils/injectReducer'
/*import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';*/
import Form from './Form'
/*import Input from './Input';
import Section from './Section';*/
import messages from './messages'
/*import { loadRepos } from '../App/actions';*/
import { submitLoginForm } from './actions'
import { makeSelectShouldRedirect, makeSelectSubmitting, makeSelectErrorMessage } from './selectors'
import reducer from './reducer'
//import saga from './saga';

import { Card } from 'material-ui/Card'

export class LoginPage extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.shouldRedirect){
      console.log("TODO: redirigir a / por ejemplo")
      this.props.history.push("/");
    }
  }

  onSubmitForm(values) {
    console.log(values)
    this.props.onSubmitForm(values)
  }

  render() {
    const {error} = this.props
    return (
      <div className="container">
        <Form onSubmit={this.props.onSubmitForm} />
        {error ? <p>{error}</p> : null}
      </div>
    )
  }
}

LoginPage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  shouldRedirect: PropTypes.bool,
  onSubmitForm: PropTypes.func.isRequired,
}

export function mapDispatchToProps(dispatch) {
  return {
    //onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(submitLoginForm(evt))
    }
  }
}

const mapStateToProps = createStructuredSelector({
  shouldRedirect: makeSelectShouldRedirect(),
  isSubmitting: makeSelectSubmitting(),
  error: makeSelectErrorMessage()
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({ key: 'login', reducer })
/*const withSaga = injectSaga({ key: 'home', saga });*/

export default compose(
  withReducer,
  //withSaga,
  withConnect
)(LoginPage)
