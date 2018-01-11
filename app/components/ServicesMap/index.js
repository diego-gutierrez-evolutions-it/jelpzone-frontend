/**
*
* ServicesMap
*
*/

import React from 'react';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
import {geolocated} from 'react-geolocated';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import LoadingIndicator from 'components/LoadingIndicator';

const cover = {
  height: '600px'
};

class ServicesMap extends React.Component { // eslint-disable-line react/prefer-stateless-function

	state = {
    zoom: 13,
  }

  render() {

    return (
    	!this.props.isGeolocationAvailable
	      ? <div>Your browser does not support Geolocation</div>
	      : !this.props.isGeolocationEnabled
	        ? <div>Geolocation is not enabled</div>
	        : this.props.coords
	          ? <Map center={[this.props.coords.latitude, this.props.coords.longitude]} zoom={this.state.zoom} style={cover}>
				        <TileLayer
				          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
				          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				        />
				        <Marker position={[this.props.coords.latitude, this.props.coords.longitude]}>
				          <Popup>
				            <span>
				              A pretty CSS3 popup. <br /> Easily customizable.
				            </span>
				          </Popup>
				        </Marker>
				      </Map>
	          : <div>
	          		<LoadingIndicator />
	          		Getting the location data&hellip; 
	          	</div>
    );
  }
}

ServicesMap.propTypes = {

};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(ServicesMap);
