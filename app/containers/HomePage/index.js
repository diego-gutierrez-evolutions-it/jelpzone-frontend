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
import VerticalIconsMenu from 'components/VerticalIconsMenu/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';

//import { submitLoginForm } from './actions';
//import { makeSelectShouldRedirect, makeSelectSubmitting, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { Card, CardText } from 'material-ui/Card';

import SnackbarInformationMessage from 'components/SnackbarInformationMessage';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const leftPanelContainer = {
  'position': 'absolute',
  'zIndex': '500',
  'paddingTop': '8%',
  'paddingLeft': '1%',
}

export class HomePage extends React.Component {

  render() {

    const menuItems = [
      {
        id: 1,
        icon: <RemoveRedEye />,
        value: 1,
      },
      {
        id: 2,
        icon: <PersonAdd />,
        value: 2,
      },
    ]

    return (
      <div>
        <ServicesMap >
          <div style={leftPanelContainer} >
            <VerticalIconsMenu items={menuItems} onItemClick={(value) => console.log(value)} />
          </div>
        </ServicesMap>
      </div>
    )
  }
}

HomePage.propTypes = {
  
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