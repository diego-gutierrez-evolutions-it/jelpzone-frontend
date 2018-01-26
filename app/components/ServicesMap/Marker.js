/**
*
* Marker
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Marker as MarkerLeaflet, Tooltip } from 'react-leaflet';

import PopupContent from './PopupContent';

import { FormattedMessage } from 'react-intl';

class Marker extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  }

  onMouseOver = (e) => {
    this.setState({
      show: true,
    })
  };

  onMouseClick(evt){
    evt.cunstomId = this.props.id;
    if(this.props.onClick != undefined){
      this.props.onClick(evt);
    }
  }

  render() {
    //TODO: include icon
    return (
    	<MarkerLeaflet position={this.props.coordinate} 
        onMouseOver={this.onMouseOver}
        onClick={this.onMouseClick.bind(this)}
      >
        <Tooltip>
          {
            (this.props.popupBody != undefined)?
              <PopupContent />
              :
              <span>
                This is Me
              </span>
          }
        </Tooltip>
      </MarkerLeaflet>
    );
  }
}

Marker.propTypes = {
	coordinate: PropTypes.array.isRequired,
	icon: PropTypes.object,
  popupBody: PropTypes.object,
  onClick: PropTypes.func
};

export default Marker;
