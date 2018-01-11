/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import ServicesMap from 'components/ServicesMap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Form from './Form';
//import { submitLoginForm } from './actions';
//import { makeSelectShouldRedirect, makeSelectSubmitting, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { Card, CardText } from 'material-ui/Card';

import SnackbarInformationMessage from 'components/SnackbarInformationMessage';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const cover = {
  height: '400px'
};

export class HomePage extends React.Component {

  render() {
    return (
      <div>
        <ServicesMap />
      </div>
    )
  }
}

HomePage.propTypes = {
  /*error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  shouldRedirect: PropTypes.bool,
  onSubmitForm: PropTypes.func.isRequired,*/
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
  //shouldRedirect: makeSelectShouldRedirect(),
  //error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(HomePage);