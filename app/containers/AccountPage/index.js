/**
 *
 * AccountPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Card from 'material-ui-next/Card';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import SnackbarInformationMessage from 'components/SnackbarInformationMessage';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import { makeSelectProfessionsList, makeSelectSuccessfullUpdate } from './selectors';
import { loadProfessionalsList, submitUpdateAccountForm } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Form from './Form';

export class AccountPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(){
    this.props.beforeInit();
  }

  render() {
    const { 
      onSubmitForm,
      values,
      professions,
      updatedOk
    } = this.props;
    return (
      <Card>
        <Form 
          handleSubmit={onSubmitForm} 
          accountValues={values}
          professions={professions}
        />

        <SnackbarInformationMessage
          message={<FormattedMessage {...messages.successUpdate} />}
          open={updatedOk}
        />

      </Card>
    );
  }
}

AccountPage.propTypes = {
  beforeInit: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  updatedOk: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  professions: makeSelectProfessionsList(),
  values: makeSelectCurrentUser(),
  updatedOk: makeSelectSuccessfullUpdate(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitUpdateAccountForm(evt));
    },
    beforeInit: () => {
      dispatch(loadProfessionalsList());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'accountPage', reducer });
const withSaga = injectSaga({ key: 'accountPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AccountPage);
