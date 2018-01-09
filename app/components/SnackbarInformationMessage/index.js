/**
*
* SnackbarInformationMessage
*
*/

import React from 'react';
import PropTypes from 'prop-types'
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SnackbarInformationMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: this.props.duration > 0? this.props.duration: 4000,
      message: this.props.message,
      open: false
    };
  }

  componentDidUpdate(){
  	this.setState({
      open: this.props.open,
    })
  }

  shouldComponentUpdate(nextProps, nextState){
  	return (this.props.open != nextProps.open)
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
    	<Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={this.state.autoHideDuration}
          onRequestClose={this.handleRequestClose} />
      

    );
  }
}

SnackbarInformationMessage.propTypes = {
  duration: PropTypes.number,
  message: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]).isRequired,
  open: PropTypes.bool.isRequired
}

export default SnackbarInformationMessage
