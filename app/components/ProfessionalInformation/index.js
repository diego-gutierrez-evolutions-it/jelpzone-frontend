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
});

class ProfessionalInformation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const image = require('assets/images/jsa-128.jpg');

    return (
      <Grid 
        container 
        spacing={0} 
        style={styles.container}
      > {/* Container inside description container */}
        <Grid item xs={12} sm={6} > {/* Photo container */}
          <Img src={image} alt="profile picture" />
        </Grid>
        <Grid item container xs={12} sm={6}> {/* Relevant description container */}
          <Grid item xs={6} sm={6}>
            <b>Nombre</b>
          </Grid>
          <Grid item xs={6} sm={6}>
            Alberto Perez
          </Grid>
          <Grid item xs={6} sm={6}>
            <b>Servicios</b>
          </Grid>
          <Grid item container xs={6} sm={6}>
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
          <Grid item xs={6} sm={6}>
            <b>Zona</b>
          </Grid>
          <Grid item xs={6} sm={6}>
            Balvanera, Congreso, San Nicolás
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

ProfessionalInformation.propTypes = {
  professional: PropTypes.object.isRequired
};

export default ProfessionalInformation;
