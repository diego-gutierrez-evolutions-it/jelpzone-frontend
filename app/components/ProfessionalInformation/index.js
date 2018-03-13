/**
*
* ProfessionalInformation
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui-next/Grid';
import Paper from 'material-ui-next/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui-next/Table';
import List, { ListItem, ListItemText } from 'material-ui-next/List';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui-next/Avatar';
import Chip from 'material-ui-next/Chip';

import { withStyles } from 'material-ui-next/styles';
import Typography from 'material-ui-next/Typography';

import Button from 'material-ui-next/Button';
import IconButton from 'material-ui-next/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';
import CallIcon from 'material-ui-icons/Phone';
import MailIcon from 'material-ui-icons/MailOutline';
import WorkIcon from 'material-ui-icons/Business';

import Img from 'components/Img';
import DescriptionList from 'components/DescriptionList';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  container: {
    padding: 8,
    textAlign: 'center',
    marginRight: '1%',
    marginLeft: '1%',
    flexGrow: 1,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  bigAvatar: {
    flex: 1,
    width: 100,
    height: 100,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class ProfessionalInformation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const image = require('assets/images/jsa-128.jpg');
    const { classes } = this.props;

    return (
      <Grid
        container
        spacing={0}
        justify="center"
        className={classes.container}
      >
        <Grid item xs={12} sm={12}>
          <Grid container >
            <Grid item xs={4} sm={2} > {/* Photo container */}
              <Avatar className={classes.bigAvatar}>
                <Img src={image} alt="profile picture" />
              </Avatar>
            </Grid>
            {/* Interaction buttons */}
            <Grid item xs={8} sm={10}> 
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="title">Juan Carlos de los Palotes</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <IconButton aria-label="Favorite" className={classes.button}> {/* Favorite button */}
                    <FavoriteIcon color="red" />
                  </IconButton>
                  <IconButton aria-label="Call" className={classes.button}> {/* TODO button */}
                    <CallIcon color="green"/>
                  </IconButton>
                  <IconButton aria-label="Contact" className={classes.button}> {/* TODO button */}
                    <MailIcon color="blue"/>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>            
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Chip avatar={
            <Avatar>
              <WorkIcon />
            </Avatar>
                }
            label="Oficio" className={classes.chip} />
          <Chip avatar={
            <Avatar>
              <WorkIcon />
            </Avatar>
                }
            label="Oficio" className={classes.chip} />
          <Chip avatar={
            <Avatar>
              <WorkIcon />
            </Avatar>
                }
            label="Oficio" className={classes.chip} />
          <Chip avatar={
            <Avatar>
              <WorkIcon />
            </Avatar>
                }
            label="Oficio" className={classes.chip} />
          <Chip avatar={
            <Avatar>
              <WorkIcon />
            </Avatar>
                }
            label="Oficio" className={classes.chip} />
          <Chip avatar={
            <Avatar>
              <WorkIcon />
            </Avatar>
                }
            label="Oficio" className={classes.chip} />

        </Grid>
      </Grid>
    );
  }
}

ProfessionalInformation.propTypes = {
  professional: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfessionalInformation);
