/**
*
* BottomNav
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui-next/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui-next/BottomNavigation';

import SearchIcon from 'material-ui-icons/Search';
import AccountIcon from 'material-ui-icons/AccountCircle';
import ChatIcon from 'material-ui-icons/Chat';
import EmailIcon from 'material-ui-icons/Email';
import PromotionsIcon from 'material-ui-icons/Label';


import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = (theme) => ({
  fab: {
    margin: 0,
    top: 'auto',
    left: 0,
    bottom: 0,
    right: 0,
    position: 'fixed',
    zIndex: 10000,
  },
});

class BottomNav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    value: '/',
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.history.push(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.fab} >
        <BottomNavigationAction label={<FormattedMessage {...messages.searchIconText} />} value="/" icon={<SearchIcon />} />
        <BottomNavigationAction label={<FormattedMessage {...messages.accountIconText} />} value="account" icon={<AccountIcon />} />
        <BottomNavigationAction label={<FormattedMessage {...messages.chatIconText} />} value="chat" icon={<ChatIcon />} />
        <BottomNavigationAction label={<FormattedMessage {...messages.notificationIconText} />} value="notifications" icon={<EmailIcon />} />
        <BottomNavigationAction label={<FormattedMessage {...messages.promotionIconText} />} value="promotions" icon={<PromotionsIcon />} />
      </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);
