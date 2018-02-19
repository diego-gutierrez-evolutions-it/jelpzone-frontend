/**
*
* BottomNav
*
*/

import React from 'react';
// import styled from 'styled-components';

import BottomNavigation, { BottomNavigationAction } from 'material-ui-next/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class BottomNav extends React.Component { // eslint-disable-line react/prefer-stateless-function

	state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

  	const { classes } = this.props;
    const { value } = this.state;

    return (
    	<BottomNavigation value={value} onChange={this.handleChange} >
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
    );
  }
}

//<FormattedMessage {...messages.header} />

BottomNav.propTypes = {

};

export default BottomNav;
