/**
*
* SnackbarInformationMessage
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from 'material-ui-next/Snackbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class SnackbarInformationMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: this.props.duration > 0 ? this.props.duration : 4000,
      message: this.props.message,
      open: false,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.open !== nextProps.open) {
      this.setState({
        open: this.props.open,
        message: this.props.message,
      });
    }
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
        onClose={this.handleRequestClose}
      />
    );
  }
}

SnackbarInformationMessage.propTypes = {
  duration: PropTypes.number,
  message: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  open: PropTypes.bool.isRequired,
};

export default SnackbarInformationMessage;
