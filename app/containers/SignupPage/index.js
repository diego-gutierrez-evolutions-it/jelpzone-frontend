/**
 *
 * SignupPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Card } from 'material-ui/Card';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import SnackbarInformationMessage from 'components/SnackbarInformationMessage';
import Form from './Form';

import { submitSignupForm } from './actions';
import { makeSelectError, makeSelectMessageError, makeSelectRegisterOk } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class SignupPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidUpdate() {
    if (this.props.shouldRedirect) {
      this.props.history.push('/');
    }
  }

  render() {
    const { onSubmitForm, error, messageError } = this.props;
    return (
      <Card>
        <Form handleSubmit={onSubmitForm} />

        <SnackbarInformationMessage
          message={messageError}
          open={error}
        />

      </Card>
    );
  }
}

SignupPage.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  messageError: PropTypes.string,
  shouldRedirect: PropTypes.bool.isRequired,
  history: PropTypes.shape(
    { push: PropTypes.func }
  ),
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  messageError: makeSelectMessageError(),
  shouldRedirect: makeSelectRegisterOk(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitSignupForm(evt));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signup', reducer });
const withSaga = injectSaga({ key: 'signup', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignupPage);
