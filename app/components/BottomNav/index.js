/**
*
* BottomNav
*
*/

import React from 'react';
// import styled from 'styled-components';

import BottomNavigation, { BottomNavigationAction } from 'material-ui-next/BottomNavigation';

// import RestoreIcon from 'material-ui-icons/Restore';
// import FavoriteIcon from 'material-ui-icons/Favorite';
// import LocationOnIcon from 'material-ui-icons/LocationOn';
// import FolderIcon from 'material-ui-icons/Folder';

import SearchIcon from 'material-ui-icons/Search';
import AccountIcon from 'material-ui-icons/AccountCircle';
import ChatIcon from 'material-ui-icons/Chat';
import EmailIcon from 'material-ui-icons/Email';
import PromotionsIcon from 'material-ui-icons/Label';


import { FormattedMessage } from 'react-intl';
import messages from './messages';

class BottomNav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    value: 'search',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} >
        <BottomNavigationAction label={<FormattedMessage {...messages.searchIconText} />} value="search" icon={<SearchIcon />} />
        <BottomNavigationAction label={<FormattedMessage {...messages.accountIconText} />} value="account" icon={<AccountIcon />} />
        <BottomNavigationAction label={<FormattedMessage {...messages.chatIconText} />} value="chat" icon={<ChatIcon />} />
        <BottomNavigationAction label={<FormattedMessage {...messages.notificationIconText} />} value="notifications" icon={<EmailIcon />} />
        <BottomNavigationAction label={<FormattedMessage {...messages.promotionIconText} />} value="promotions" icon={<PromotionsIcon />} />
      </BottomNavigation>
    );
  }
}

// <FormattedMessage {...messages.header} />

BottomNav.propTypes = {

};

export default BottomNav;
