/**
*
* Header
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import { FormattedMessage } from 'react-intl'
import messages from './messages'

import AppBar from 'material-ui/AppBar'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const { title } = this.props
    return (
      <div>
      	<AppBar
          title={title}
        />
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header
