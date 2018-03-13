/**
*
* ProfessionalInformationPanel
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui-next/styles';
import classNames from 'classnames';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui-next/ExpansionPanel';
import Typography from 'material-ui-next/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Chip from 'material-ui-next/Chip';
import Button from 'material-ui-next/Button';
import Divider from 'material-ui-next/Divider';

const styles = (theme) => ({
  root: {
    // width: '100%',
    paddingTop: '20px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.3%',
  },
  columnRight: {
    flexBasis: '76.7%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
});

class ProfessionalInformationPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes, heading, secondaryHeading, children } = this.props;

    return (
      <div className={classes.root}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>{ heading }</Typography>
            </div>
            <div className={classes.column}>
              { secondaryHeading }
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />
            <div className={classNames(classes.columnRight, classes.helper)}>
              { children }
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ProfessionalInformationPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  heading: PropTypes.object.isRequired,
  secondaryHeading: PropTypes.any.isRequired,
  children: PropTypes.any,
};

export default withStyles(styles)(ProfessionalInformationPanel);
