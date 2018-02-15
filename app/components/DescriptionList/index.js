/**
*
* DescriptionList
*
* This is a list responsive 
*/

import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui-next/Grid';

const ifEven = count => renderIf(count % 2 === 0);

function DescriptionList(props) {

	const {children, direction} = props;

	const itemXs = (props.itemXs != undefined)? props.itemXs:6,
				itemSm = (props.itemSm != undefined)? props.itemSm:3,
				fieldXs = (props.fieldXs != undefined)? props.fieldXs:6;

  return (
  	<Grid container >
	    {children.map((item, i) => (
    		(i % 2 !== 0)?
    			<Grid item xs={itemXs} sm={itemSm} key={i}> 
	          <Grid container  direction={direction} >
	            <Grid item xs={fieldXs}> 
	              {children[i-1]}
	            </Grid>
	            <Grid item xs={fieldXs}> 
	              {children[i]}
	            </Grid>
	          </Grid>
	        </Grid>
	        :
	        null
	    	
	    ))}
    </Grid>
  );
}

DescriptionList.propTypes = {
	children: PropTypes.node.isRequired,
	direction: PropTypes.string.isRequired,
	itemXs: PropTypes.number,
	itemSm: PropTypes.number,
	fieldXs: PropTypes.number,
};

export default DescriptionList;
