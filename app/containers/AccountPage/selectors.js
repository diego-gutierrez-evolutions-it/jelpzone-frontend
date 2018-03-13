import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';

/**
 * Direct selector to the accountPage state domain
 */
const selectAccountPageDomain = (state) => state.get('accountPage');

const formSelector = formValueSelector('account');
const valuesSelector = (state) => formSelector(state, 'firstName', 'lastName', 'address', 'professions');

/**
 * Other specific selectors
 */
export const makeSelectProfessionsList = () => createSelector(
  selectAccountPageDomain,
  (accountState) => accountState.get('professions')
);

export const makeSelectSuccessfullUpdate = () => createSelector(
  selectAccountPageDomain,
  (accountState) => accountState.get('updatedAccountOk')
);

export const makeSelectFailedUpdate = () => createSelector(
  selectAccountPageDomain,
  (accountState) => accountState.get('updatedAccountError')
);

export const makeSelectAccountValues = () => createSelector(
  valuesSelector,
  (values) => values
);

export const makeSelectUploadFiles = () => createSelector(
  selectAccountPageDomain,
  (accountState) => accountState.get('uploadFiles')
);

/**
 * Default selector used by AccountPage
 */

const makeSelectAccountPage = () => createSelector(
  selectAccountPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectAccountPage;
export {
  selectAccountPageDomain,
};
