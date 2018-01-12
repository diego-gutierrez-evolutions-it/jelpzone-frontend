/**
*
* ServicesMap
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
import {geolocated} from 'react-geolocated';
import { divIcon } from "leaflet";

import map from "lodash/map";

import FontIcon from 'material-ui/FontIcon';
import { blue500, red500, greenA200 } from 'material-ui/styles/colors';

import LoadingIndicator from 'components/LoadingIndicator';
import Marker from './Marker';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const cover = {
  height: '600px'
};

const divLeft = {
	'position': 'relative',
  'text-align': 'left',
}

const spanpanel = {
	'position': 'absolute',
  'z-index': '500',
}

class ServicesMap extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {

		const { marks } = this.props;

    return (
    	!this.props.isGeolocationAvailable
	      ? <div><FormattedMessage {...messages.browserNotSupportGeolocation} /></div>
	      : !this.props.isGeolocationEnabled
	        ? <div><FormattedMessage {...messages.geolocationNotEnabled} /></div>
	        : this.props.coords
	          ? <div>
	          		<span>Left Panel - This must be this.props.leftPanelComponent </span>
		          	<Map center={[this.props.coords.latitude, this.props.coords.longitude]} zoom={20} style={cover}>
					        <TileLayer
					          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					        />
					        <Marker coordinate={[this.props.coords.latitude, this.props.coords.longitude]}
					        				icon={divIcon({ html: `<i class="material-icons">My Position</i>`})}
					        />

					        {
			              map(marks, (mark) => {
			                const { classNames } = mark;

			                const icon = divIcon({ className: classNames, html: `<span>This is a mark</span>`});
			                return (
			                  <Marker icon={icon} key={mark.id} position={[mark.latitude, mark.longitude]}/>
			                )
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
	  PropTypes.shape(
	    { 
	    	id: PropTypes.number,
	    	latitude: PropTypes.number,
	    	longitude: PropTypes.number,
	    	classNames: PropTypes.object,
	    }
	  ),
	),
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(ServicesMap);
