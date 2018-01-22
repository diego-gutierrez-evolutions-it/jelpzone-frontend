/**
*
* VerticalIconsMenu
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NoItemIcon from 'material-ui-icons/SyncProblem';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import './style.css';

const style = {
	menu: {
		backgroundColor: 'white',
		display: 'inline-block',
	},
	menuItem: {
		width: '70%',
	}
  
};

//<FormattedMessage {...messages.header} />
class VerticalIconsMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function

	onItemClick(event, menuItem, index){
		if(this.props.onItemClick){
			this.props.onItemClick(menuItem.props.value);
		}
		
	}

  render() {

  	const { items } = this.props;

	  let content = (<div></div>);

	  // If we have items, render them
	  if (items) {
	    content = items.map((item) => (
	      <MenuItem key={`item-${item.id}`} leftIcon={item.icon} value={item.value} />
	    ));
	  } else {
	    // Otherwise render a single component
	    content = (<MenuItem leftIcon={<NoItemIcon />} />);
	  }

    return (
      <Menu style={style.menu} menuItemStyle={style.menuItem} onItemClick={this.onItemClick.bind(this)} >
      	{content}
      </Menu>
    );
  }
}

VerticalIconsMenu.propTypes = {
	items: PropTypes.arrayOf(
	  PropTypes.shape(
	    { 
	    	id: PropTypes.number.isRequired,
	    	icon: PropTypes.node,
	    	value: PropTypes.node.isRequired,
	    }
	  ),
	),
	onItemClick: PropTypes.func,
};

export default VerticalIconsMenu;
