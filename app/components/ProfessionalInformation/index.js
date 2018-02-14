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
import { withStyles } from 'material-ui-next/styles';
import Typography from 'material-ui-next/Typography';

import Button from 'material-ui-next/Button';
import IconButton from 'material-ui-next/IconButton';
import FavoriteIcon from 'material-ui-icons/FavoriteBorder';
import ContractCategoryIcon from 'material-ui-icons/DoNotDisturbOff';

import Img from 'components/Img';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  container: {
    padding: 16,
    textAlign: 'center',
    marginRight: '1%',
    marginLeft: '1%',
    flexGrow: 1,
  },
  rightContainer: {
    //textAlign: 'right',
  },
  leftContainer: {
    //textAlign: 'left',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class ProfessionalInformation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const image = require('assets/images/jsa-128.jpg'),
          { classes } = this.props;

    return (
      <Grid 
        container 
        spacing={8} 
        justify="center"
        className={classes.container}
      > {/* Container inside description container */}
        <Grid item xs={12} sm={4} className={classes.rightContainer}> {/* Photo container */}
          <Img src={image} alt="profile picture" />
        </Grid>
        <Grid item xs={12} sm={8}> {/* Relevant description container */}
          <Grid  container>

            {/* Interaction buttons */}
            <Grid item xs={12}> 
              <Grid  container>
                <Grid item xs={6} sm={6}>
                  <IconButton aria-label="Favorite" className={classes.button}> {/* Favorite button */}
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="ContractCategory" className={classes.button}> {/* TODO button */}
                    <ContractCategoryIcon color="red"/>
                  </IconButton>
                </Grid>
                <Grid item xs={6} sm={6}> {/* Contact button */}
                  <Button variant="raised" color="secondary">
                    Contact Now!
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* Description services */}
            <Grid item xs={12}> 
              <Grid  container>
                <Grid item xs={6} sm={6} className={classes.rightContainer}> 
                  <Typography variant="title">Nombre</Typography>
                </Grid>
                <Grid item xs={6} sm={6} className={classes.leftContainer}>
                  Alberto Perez
                </Grid>
                <Grid item xs={6} sm={6} className={classes.rightContainer}>
                  <Typography variant="title">Servicios</Typography>
                </Grid>
                <Grid item xs={6} sm={6} className={classes.leftContainer}>
                  <Grid item xs={12}>
                    Plomeria
                  </Grid>
                  <Grid item xs={12}>
                    Carpinteria
                  </Grid>
                  <Grid item xs={12}>
                    Jardineria
                  </Grid>
                </Grid>
                <Grid item xs={6} sm={6} className={classes.rightContainer}>
                  <Typography variant="title">Zona</Typography>
                </Grid>
                <Grid item xs={6} sm={6} className={classes.leftContainer}>
                  Balvanera, Congreso, San Nicolás
                </Grid>
              </Grid>
            </Grid>
            
          </Grid>
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
