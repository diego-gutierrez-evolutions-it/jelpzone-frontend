/**
*
* Header
*
*/

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FontIcon from 'material-ui/FontIcon';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import ChatIcon from 'material-ui/svg-icons/communication/chat';

const nearbyIcon = <IconLocationOn />;
const chatIcon = <ChatIcon />;
const accountIcon = <AccountIcon />;
const searchIcon = <SearchIcon />;

import LocaleToggle from 'containers/LocaleToggle';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class BottomNav extends React.Component {

  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {

    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={ this.state.selectedIndex }>
          <BottomNavigationItem
            label="Search"
            icon={searchIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Account"
            icon={accountIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Chats"
            icon={chatIcon}
            onClick={() => this.select(2)}
          />
          <LocaleToggle />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNav;
