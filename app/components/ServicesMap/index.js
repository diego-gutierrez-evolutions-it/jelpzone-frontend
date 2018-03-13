/**
*
* ServicesMap
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
import { geolocated } from 'react-geolocated';

import { divIcon } from 'leaflet';

import map from 'lodash/map';

import blue from 'material-ui-next/colors/blue';
import red from 'material-ui-next/colors/red';
import green from 'material-ui-next/colors/green';
import LoadingIndicator from 'components/LoadingIndicator';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import myPositionIcon from './MyPositionIcon';
import Marker from './Marker';

const blue500 = blue['500'];
const red500 = red['500'];
const greenA200 = green.A200;

const cover = {
  height: '600px',
};

const container = {
  position: 'relative',
  textAlign: 'left',
};

class ServicesMap extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { marks, children } = this.props;

    return (
    	!this.props.isGeolocationAvailable
	      ? <div><FormattedMessage {...messages.browserNotSupportGeolocation} /></div>
	      : !this.props.isGeolocationEnabled
	        ? <div><FormattedMessage {...messages.geolocationNotEnabled} /></div>
	        : this.props.coords
	          ? <div style={container} >

  { children }

  <Map center={[this.props.coords.latitude, this.props.coords.longitude]} zoom={14} style={cover}>
    <TileLayer
      attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker
      coordinate={[this.props.coords.latitude, this.props.coords.longitude]}
      icon={myPositionIcon}
      id={'mark-me'}
    />

     {
      map(marks, (mark) => {
        const { classNames } = mark;

        return (
          <Marker
            id={mark.id}
            key={`jelpzone-marker-${mark.id}`}
            coordinate={[mark.latitude, mark.longitude]}
            popupBody={mark.popupBody}
            onClick={this.props.onMarkerClick}
          />
        );
      })
    }

  </Map>
</div>
: <div>
  <LoadingIndicator />
  <FormattedMessage {...messages.gettingGeolocation} />
</div>
    );
  }
}

ServicesMap.propTypes = {
  marks: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    classNames: PropTypes.object,
    popupBody: PropTypes.object,
  }),
),
  onMarkerClick: PropTypes.func.isRequired,
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(ServicesMap);
