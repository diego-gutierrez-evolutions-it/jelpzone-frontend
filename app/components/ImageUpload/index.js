/**
*
* ImageUpload
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import { withStyles } from 'material-ui-next/styles';
import Card, { CardActions, CardContent } from 'material-ui-next/Card';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  card: {
    maxWidth: 275,
  },
});

class ImageUpload extends React.Component { // eslint-disable-line react/prefer-stateless-function

	onDrop(files) {
    this.props.onDrop(files);
  }

  render() {
  	const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Dropzone 
            accept="image/jpeg, image/png"
            onDrop={this.onDrop.bind(this)} 
            disabled={this.props.disabled? this.props.disabled:false}
          >
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
          {this.props.warningMessage}
          {this.props.errorMessage}
        </CardContent>
        {
          (this.props.errorMessage != undefined)?
            null
            :
            (
              <CardContent>
                { this.props.children }
              </CardContent>
            )
        }
        
      </Card>
    );
  }
}

ImageUpload.propTypes = {
	classes: PropTypes.object.isRequired,
	onDrop: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	warningMessage: PropTypes.string,
	errorMessage: PropTypes.string,
};

export default withStyles(styles)(ImageUpload);
