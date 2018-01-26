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
  paper: {
    padding: 16,
    textAlign: 'center',
    marginRight: '1%',
    marginLeft: '1%'
  },
});

class ProfessionalInformation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Paper style={styles.paper}>
        <Grid container spacing={24}> {/* Container inside description container */}
          <Grid item xs={12} sm={6} > {/* Photo container */}
            <Img src={'./jsa-128.jpg'} alt="profile picture" />
          </Grid>
          <Grid item xs={12} sm={6}> {/* Relevant description container */}
            <Table >
              <TableBody>
                <TableRow >
                  <TableCell>Nombre</TableCell>
                  <TableCell>Alberto Perez</TableCell>
                </TableRow>

                <TableRow >
                  <TableCell>Servicios</TableCell>
                  <TableCell>
                    <List>
                      <ListItem >
                        <ListItemText primary={`Plomeria`} />
                      </ListItem>
                      <ListItem >
                        <ListItemText primary={`Carpinteria`} />

                       </ListItem>
                      <ListItem >
                        <ListItemText primary={`Jardineria`} />
                      </ListItem>
                    </List>
                  </TableCell>
                </TableRow>

                <TableRow >
                  <TableCell>Zona</TableCell>
                  <TableCell>Balvanera, Congreso, San Nicolás</TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

ProfessionalInformation.propTypes = {
  professional: PropTypes.object.isRequired
};

export default ProfessionalInformation;
