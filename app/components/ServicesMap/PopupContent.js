/**
*
* Popup Content
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class PopupContent extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
    	<Card>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="images/jsa-128.jpg"
        />
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
  }
}

PopupContent.propTypes = {
	/*coordinate: PropTypes.array.isRequired,
	icon: PropTypes.object,
  popupBody: PropTypes.object,*/
};

export default PopupContent;