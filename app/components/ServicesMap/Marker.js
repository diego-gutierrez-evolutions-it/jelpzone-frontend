/**
*
* Marker
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Marker as MarkerLeaflet, Popup } from 'react-leaflet';

import { FormattedMessage } from 'react-intl';

const cover = {
  height: '600px'
};

class Marker extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
  	//TODO: include icon
    return (
    	<MarkerLeaflet position={this.props.coordinate}>
        <Popup>
          <span>
            A pretty CSS3 popup. <br /> Easily customizable.
          </span>
        </Popup>
      </MarkerLeaflet>
    );
  }
}

Marker.propTypes = {
	coordinate: PropTypes.array.isRequired,
	icon: PropTypes.object
};

export default Marker;