/**
*
* Popup Content
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import {Card, CardActions, CardHeader, CardTitle, CardText, CardContent} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import RatingStars from 'components/RatingStars';

class PopupContent extends React.Component { // eslint-disable-line react/prefer-stateless-function

  /*
   * Added to avoid muiTheme contxt problem
   * See https://stackoverflow.com/questions/36953711/i-cannot-use-material-ui-components-after-update-to-material-ui0-15-0-beta-1
   */
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
    	<Card>
        <CardHeader
          title="Vandeep Phillipe"
          subtitle="Plumber"
          avatar="./jsa-128.jpg"
        />
        <RatingStars numberStars={5} rating={1}/>
      </Card>
    );
  }
}

PopupContent.propTypes = {
	/*coordinate: PropTypes.array.isRequired,
	icon: PropTypes.object,
  popupBody: PropTypes.object,*/
};

PopupContent.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default PopupContent;