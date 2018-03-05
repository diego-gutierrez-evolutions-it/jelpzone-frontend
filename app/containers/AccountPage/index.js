/**
 *
 * AccountPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Avatar from 'material-ui-next/Avatar';
import Card from 'material-ui-next/Card';
import { withStyles } from 'material-ui-next/styles';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import ImageUpload from 'components/ImageUpload';
import SnackbarInformationMessage from 'components/SnackbarInformationMessage';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import { makeSelectProfessionsList, makeSelectSuccessfullUpdate, makeSelectUploadFiles } from './selectors';
import { loadProfessionalsList, submitUpdateAccountForm, loadDroppedFiles } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Form from './Form';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 45,
    height: 45,
  },
};

export class AccountPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(){
    this.props.beforeInit();
  }

  onDrop(files){
    this.props.onDropFiles(files);
  }

  render() {
    const { 
      onSubmitForm,
      values,
      professions,
      updatedOk,
      previewUploadedFiles,
      classes
    } = this.props;
    return (
      <Card>
        <Form 
          handleSubmit={onSubmitForm} 
          accountValues={values}
          professions={professions}
        >
          <ImageUpload 
            onDrop={this.onDrop.bind(this)}
            errorMessage={(previewUploadedFiles.size > 4)? 'You can\'t load more than 4 pictures':null}
          >
            <div className={classes.row}>
              {previewUploadedFiles.map((previewUploadedFile, index) => (
                <Avatar
                  key={index}
                  src={previewUploadedFile.preview}
                  className={classes.bigAvatar}
                />
              ))}
            </div>
          </ImageUpload>
        </Form>

        <SnackbarInformationMessage
          message={<FormattedMessage {...messages.successUpdate} />}
          open={updatedOk}
        />

      </Card>
    );
  }
}

AccountPage.propTypes = {
  previewUploadedFiles: PropTypes.object.isRequired,
  beforeInit: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  onDropFiles: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  updatedOk: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

AccountPage = withStyles(styles)(AccountPage);

const mapStateToProps = createStructuredSelector({
  previewUploadedFiles: makeSelectUploadFiles(),
  professions: makeSelectProfessionsList(),
  values: makeSelectCurrentUser(),
  updatedOk: makeSelectSuccessfullUpdate(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitUpdateAccountForm(evt));
    },
    beforeInit: () => {
      dispatch(loadProfessionalsList());
    },
    onDropFiles: (files) => {
      dispatch(loadDroppedFiles(files));
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'accountPage', reducer });
const withSaga = injectSaga({ key: 'accountPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AccountPage);
