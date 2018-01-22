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
import PopupContent from 'components/ServicesMap/PopupContent';
import VerticalIconsMenu from 'components/VerticalIconsMenu/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import RemoveRedEye from 'material-ui-icons/RemoveRedEye';
import PersonAdd from 'material-ui-icons/PersonAdd';
import Grid from 'material-ui-next/Grid';

//import { submitLoginForm } from './actions';
//import { makeSelectShouldRedirect, makeSelectSubmitting, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';

import SnackbarInformationMessage from 'components/SnackbarInformationMessage';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import './HomePage.css'; // Tell Webpack that HomePage.js uses these styles

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

export class HomePage extends React.Component {

  /*
   * TODO: DELETE FROM HERE
   * Example of movement
   * Only to show how map updates
   */
  constructor(props){
    super(props);
    this.state = {
      professionals: [
        {
          id: 1,
          latitude: -34.62,
          longitude: -58.42,
        },
        {
          id: 2,
          latitude: -34.63,
          longitude: -58.44,
        },
      ]
    };
  }

  updateProfessionals() {
    
    var plusOrMinus1 = Math.random() < 0.5 ? -1 : 1;
    var plusOrMinus2 = Math.random() < 0.5 ? -1 : 1;
    var binary1 = Math.random() < 0.5 ? 0 : 1;
    var binary2 = Math.random() < 0.5 ? 0 : 1;

    this.setState({
      professionals: [
        {
          id: 1,
          latitude: this.state.professionals[0].latitude + 0.0001*binary1*plusOrMinus1,
          longitude: this.state.professionals[0].longitude + 0.0001*binary2*plusOrMinus2,
          popupBody: <PopupContent />
        },
        {
          id: 2,
          latitude: this.state.professionals[1].latitude + 0.0001*binary1*plusOrMinus2,
          longitude: this.state.professionals[1].longitude + 0.0001*binary2*plusOrMinus1,
        },
      ]
    });

  }

  componentWillMount(){
    this.updateProfessionals();
  }

  componentDidMount(){
    this.loadInterval = window.setInterval(function () {
      this.updateProfessionals();
    }.bind(this), 3000);
  }

  componentWillUnmount () {
    window.clearInterval(this.loadInterval);
  }
  /*
   * TO HERE
   */

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
      <div style={styles.root} >
        <Grid container spacing={24}>

          <Grid item xs={12}> {/* Container map */}
            <ServicesMap marks={this.state.professionals} >
              <div className="left-container-md left-container-xs"  >
                <VerticalIconsMenu items={menuItems} onItemClick={(value) => console.log(value)} />
              </div>
            </ServicesMap>
          </Grid>

          <Grid item xs={12}> {/* Container description */}
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                Photo place
              </Grid>
              <Grid item xs={12} sm={6}>
                Description place
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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