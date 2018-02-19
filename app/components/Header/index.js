/**
*
* Header
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui-next/AppBar';
import Toolbar from 'material-ui-next/Toolbar';
import Typography from 'material-ui-next/Typography';
import Button from 'material-ui-next/Button';

import LocaleToggle from 'containers/LocaleToggle';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const sytles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  
}

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const { title, rightElement } = this.props
    return (
      <div style={sytles.root}>
      	<AppBar position="static" >
          <Toolbar>
            <Typography type="title" color="inherit" style={sytles.flex}>
              JelpZone
            </Typography>
            <Button color="inherit">
              <LocaleToggle />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  rightElement: PropTypes.element,
};

export default Header
