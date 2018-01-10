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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { submitSignupForm } from './actions';
import { makeSelectError, makeSelectMessageError, makeSelectRegisterOk } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Form from './Form';
import SnackbarInformationMessage from 'components/SnackbarInformationMessage';

export class SignupPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.shouldRedirect){
      this.props.history.push("/signup-success");
    }
  }

  render() {
    const { onSubmitForm, error, messageError } = this.props;
    return (
      <Card>
        <Form handleSubmit={onSubmitForm}/>

        <SnackbarInformationMessage 
            message={messageError}
            open={error} />
        

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
  messageError: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  messageError: makeSelectMessageError(),
  shouldRedirect: makeSelectRegisterOk()
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitSignupForm(evt))
    }
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signup', reducer });
const withSaga = injectSaga({ key: 'signup', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignupPage);
