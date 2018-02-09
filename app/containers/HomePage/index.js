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

import { isEmpty } from 'lodash';

import ServicesMap from 'components/ServicesMap';
import PopupContent from 'components/ServicesMap/PopupContent';
import VerticalIconsMenu from 'components/VerticalIconsMenu/Loadable';
import ProfessionalInformation from 'components/ProfessionalInformation/Loadable';
import ProfessionalInformationList from 'components/ProfessionalInformationList/Loadable';
import ProfessionalInformationPanel from 'components/ProfessionalInformationPanel/Loadable';
import RatingStars from 'components/RatingStars';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import RemoveRedEye from 'material-ui-icons/RemoveRedEye';
import PersonAdd from 'material-ui-icons/PersonAdd';
import Grid from 'material-ui-next/Grid';
import Typography from 'material-ui-next/Typography';
import { withStyles } from 'material-ui-next/styles';

import { toggleProfessionalExtraInformation } from './actions';
import { makeSelectUserExtraInformation } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import './HomePage.css'; // Tell Webpack that HomePage.js uses these styles

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
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
        {
          id: 3,
          latitude: -34.61,
          longitude: -58.45,
        },
        {
          id: 4,
          latitude: -34.62,
          longitude: -58.41,
        },
        {
          id: 5,
          latitude: -34.61,
          longitude: -58.40,
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
          longitude: this.state.professionals[0].longitude + 0.0001*binary1*plusOrMinus2,
          popupBody: <PopupContent />
        },
        {
          id: 2,
          latitude: this.state.professionals[1].latitude + 0.0001*binary2*plusOrMinus2,
          longitude: this.state.professionals[1].longitude + 0.0001*binary2*plusOrMinus1,
        },
        {
          id: 3,
          latitude: this.state.professionals[2].latitude + 0.0001*binary2*plusOrMinus2,
          longitude: this.state.professionals[2].longitude + 0.0001*plusOrMinus1*plusOrMinus1,
        },
        {
          id: 4,
          latitude: this.state.professionals[3].latitude + 0.0001*binary2*plusOrMinus2,
          longitude: this.state.professionals[3].longitude + 0.0001*plusOrMinus1*plusOrMinus1,
        },
        {
          id: 5,
          latitude: this.state.professionals[4].latitude + 0.0001*binary2*plusOrMinus2,
          longitude: this.state.professionals[4].longitude + 0.0001*plusOrMinus1*plusOrMinus1,
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
    ],
          { classes } = this.props;

    return (
      <div className={classes.root} >
        <Grid container spacing={24} justify={'center'}>

          <Grid item xs={12} sm={7}> {/* Container map */}
            <ServicesMap marks={this.state.professionals} 
              onMarkerClick={this.props.toggleExtraInformation}
            >
              <div className="left-container-md left-container-xs"  >
                <VerticalIconsMenu items={menuItems} onItemClick={(value) => console.log(value)} />
              </div>
            </ServicesMap>
          </Grid>
          <Grid item xs={12} sm={5}> {/* Container professionals list */}
            <ProfessionalInformationList professionals={this.state.professionals} />
          </Grid>

          {
            (this.props.userExtraInformation.size>0) ?
              <Grid item> {/* Extra information container */}
                <Grid container justify={'center'} direction={'column'} >
                  <Grid item > {/* Personal information */}
                    <ProfessionalInformation professional={this.props.userExtraInformation} />
                  </Grid>
                  <Grid item > {/* Reputation Panel */}
                    <ProfessionalInformationPanel 
                      heading={<FormattedMessage {...messages.reputationHeader} />}
                      secondaryHeading={<RatingStars numberStars={5} rating={1}/>}
                    >
                      Reputation Content
                    </ProfessionalInformationPanel>
                    <ProfessionalInformationPanel 
                      heading={<FormattedMessage {...messages.usersQualificationHeader} />}
                      secondaryHeading={<Typography className={classes.secondaryHeading}><FormattedMessage {...messages.usersQualificationSubheading} /></Typography>}
                    >
                      Users Qualification Content
                    </ProfessionalInformationPanel>
                  </Grid>
                </Grid>
              </Grid>
              :
              null
          }          

        </Grid>
      </div>
    )
  }
}

HomePage.propTypes = {
  userExtraInformation: PropTypes.object,
}

HomePage = withStyles(styles)(HomePage);

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(submitLoginForm(evt));
    },
    toggleExtraInformation: (evt) => {
      dispatch(toggleProfessionalExtraInformation(evt.cunstomId));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  userExtraInformation: makeSelectUserExtraInformation(),
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