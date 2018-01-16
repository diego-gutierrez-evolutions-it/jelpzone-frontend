/**
*
* Header
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

import LocaleToggle from 'containers/LocaleToggle';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const { title, rightElement } = this.props
    return (
      <div>
      	<AppBar
          title={title}
          iconElementRight={<LocaleToggle />}
        />
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  rightElement: PropTypes.element,
};

export default Header
