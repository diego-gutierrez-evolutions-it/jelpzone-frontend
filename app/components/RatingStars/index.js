/**
*
* RatingStars
*
*/
import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui-next/IconButton';
import ActionGrade from 'material-ui-icons/Grade';
import amber from 'material-ui-next/colors/amber';
import { withStyles } from 'material-ui-next/styles';

import './RatingStars.css'; // Tell Webpack that HomePage.js uses these styles

const amberA700 = amber.A700,
      styles = {};

class RatingStars extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

  	const { numberStars, rating, classes, className } = this.props;

  	let content = [];
  	for (var i=1; i <= numberStars; i++) {
  		if(i <= rating){
  			content.push(
  				<IconButton 
            key={i} 
            className="start-button-xs start-button-md"
          >
  					<ActionGrade color={amberA700} />
  				</IconButton>
  			);
  		} else{
  			content.push(
  				<IconButton 
            key={i} 
            disabled={true}
            className="start-button-xs start-button-md"
          >
  					<ActionGrade />
  				</IconButton>
  			);
  		}	    
		}

    return (
      <div className={className} >
      	{ content }
      </div>
    );
  }
}

RatingStars.propTypes = {
	numberStars: PropTypes.number.isRequired,
	rating: PropTypes.number,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(RatingStars);