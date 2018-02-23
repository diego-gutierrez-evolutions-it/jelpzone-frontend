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

import { loadProfessionalsList } from './actions';
import { makeSelectAccountValues, makeSelectProfessionsList} from './selectors';
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
      professions
    } = this.props;
    return (
      <Card>
        <Form 
          handleSubmit={onSubmitForm} 
          values={values}
          professions={professions}
        />

        {/*<SnackbarInformationMessage
          message={messageError}
          open={error}
        />*/}

      </Card>
    );
  }
}

AccountPage.propTypes = {
  beforeInit: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  professions: makeSelectProfessionsList(),
  values: makeSelectAccountValues(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      //dispatch(submitSignupForm(evt));
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
