/**
*
* Marker
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Marker as MarkerLeaflet, Popup } from 'react-leaflet';

import PopupContent from './PopupContent';

import { FormattedMessage } from 'react-intl';

class Marker extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
  	//TODO: include icon
    return (
    	<MarkerLeaflet position={this.props.coordinate}>
        <Popup>
          {
            (this.props.popupBody != undefined)?
              <PopupContent />
              :
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
          }
        </Popup>
      </MarkerLeaflet>
    );
  }
}

Marker.propTypes = {
	coordinate: PropTypes.array.isRequired,
	icon: PropTypes.object,
  popupBody: PropTypes.object,
};

export default Marker;