/**
*
* Header
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui-next/styles';
import AppBar from 'material-ui-next/AppBar';
import Toolbar from 'material-ui-next/Toolbar';
import Typography from 'material-ui-next/Typography';
import Button from 'material-ui-next/Button';
import IconButton from 'material-ui-next/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui-next/Menu';

import AccountCircle from 'material-ui-icons/AccountCircle';
import LocaleToggle from 'containers/LocaleToggle';

import grey from 'material-ui-next/colors/grey';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    anchorEl: null,
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const { classes } = this.props;
    // const { title, rightElement } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const white = grey[50];

    return (
      <div className={classes.root} >
        <AppBar position="fixed">
          <Toolbar>
            <IconButton aria-label="Menu" className={classes.menuButton} >
              <MenuIcon color="white"/>
            </IconButton>
            <Typography type="title" color="inherit" style={styles.flex}>
              JelpZone
            </Typography>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
              >
                <AccountCircle color="white" />
                
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}><FormattedMessage {...messages.myProfile} /></MenuItem>
                <MenuItem onClick={this.handleClose}><FormattedMessage {...messages.myAccount} /></MenuItem>
                <MenuItem onClick={this.handleClose}><FormattedMessage {...messages.JelpPay} /></MenuItem>
                <MenuItem ><FormattedMessage {...messages.Language} />
                  <LocaleToggle />
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  rightElement: PropTypes.element,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
