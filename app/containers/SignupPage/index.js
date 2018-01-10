/**
 *
 * SignupPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Card, CardText } from 'material-ui/Card';

import injectReducer from 'utils/injectReducer';
import makeSelectSignupPage from './selectors';
import reducer from './reducer';
import messages from './messages';

import Form from './Form';

export class SignupPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Card>
        <Form />
        <CardText><FormattedMessage {...messages.header} /></CardText>
      </Card>
    );
  }
}

SignupPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signuppage: makeSelectSignupPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signupPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(SignupPage);
