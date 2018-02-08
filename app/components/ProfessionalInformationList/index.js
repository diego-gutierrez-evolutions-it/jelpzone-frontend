/**
*
* ProfessionalInformationList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';

import ProfessionalInformation from 'components/ProfessionalInformation/Loadable';

const cover = {
  height: '600px',
  overflowY: 'auto'
};

class ProfessionalInformationList extends React.Component { // eslint-disable-line react/prefer-stateless-function

	constructor(props){
		super(props);
	}

  render() {
    return (
      <div>
		    <GridList
		      cols={1}
		      padding={0}
		      style={cover} 
		    >
		      {this.props.professionals.map((professional) => (
		        <GridTile
		          key={professional.id}
		          rows={2}
		        >
		          <ProfessionalInformation professional={professional} />
		        </GridTile>
		      ))}
		    </GridList>
		  </div>
    );
  }
}

ProfessionalInformationList.propTypes = {
  professionals: PropTypes.any
};

export default ProfessionalInformationList;
