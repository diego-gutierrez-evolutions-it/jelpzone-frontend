/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectError } from 'containers/App/selectors';

import { submitLoginForm } from 'containers/App/actions';

//import reducer from './reducer';
import saga from './saga';

import Form from './Form';

import { Card, CardText } from 'material-ui/Card';

import SnackbarInformationMessage from 'components/SnackbarInformationMessage';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class LoginPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState){
    /*
     * TODO: delete
     *
     if (this.props.shouldRedirect){
      this.props.history.push("/");
    }*/
  }

  onSubmitForm(values) {
    this.props.onSubmitForm(values);
  }

  render() {
    const {error} = this.props;
    return (
      <Card>
        <Form onSubmit={this.props.onSubmitForm} />

        <SnackbarInformationMessage 
          message={<FormattedMessage {...messages.invalidCredentials} />}
          open={error != false} />

        <CardText><FormattedMessage {...messages.accountYet} /> <Link to='/signup'><FormattedMessage {...messages.signUp}/></Link></CardText>
      </Card>
    );
  }
}

LoginPage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func.isRequired,
}

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(submitLoginForm(evt));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  // withReducer,
  withSaga,
  withConnect
)(LoginPage);
