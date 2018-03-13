/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import AccountPage from 'containers/AccountPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import BottomNav from 'components/BottomNav/Loadable';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiThemeProvider as NewMuiThemeProvider, createMuiTheme } from 'material-ui-next/styles';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { userIsAuthenticated, userIsNotAuthenticated } from 'utils/authWrapper';
import injectSaga from 'utils/injectSaga';

import { loadingUser } from './actions';
import saga from './saga';

const AppWrapper = styled.div`
  text-align: center;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d80e0e',
    },
    secondary: {
      main: '#0ea1d2',
    },
    action: {
      main: '#ff3d00',
    },
    contrast: {
      main: '#0ea1d2',
    },
    disabled: {
      main: '#b0bec5',
    },
    error: {
      main: '#0ea1d2',
    },
  },
});


export class App extends React.Component {
  componentWillMount() {
    this.props.loadCurrentUser();
  }

  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Jelpzone"
          defaultTitle="Jelpzone"
        >
          <meta name="description" content="Jelpzone application" />
        </Helmet>
        <MuiThemeProvider>
          <NewMuiThemeProvider theme={theme}>
            <div className="container">
              <Header title={'Jelpzone'} />
              {/* Fix - We put ConnectedRouter inside App for redirection works */}
              <ConnectedRouter history={this.props.history}>
                <Switch>
                  <Route exact path="/" component={userIsAuthenticated(HomePage)} />
                  <Route exact path="/account" component={userIsAuthenticated(AccountPage)} />
                  <Route exact path="/signup" component={userIsNotAuthenticated(SignupPage)} />
                  <Route path="/login" component={userIsNotAuthenticated(LoginPage)} />
                  <Route path="" component={NotFoundPage} />
                </Switch>
              </ConnectedRouter>

              <BottomNav history={this.props.history} />

            </div>
          </NewMuiThemeProvider>
        </MuiThemeProvider>
      </AppWrapper>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
  loadCurrentUser: PropTypes.func,
};

const mapDispatchToProps = {
  loadCurrentUser: loadingUser,
};

const withConnect = connect(null, mapDispatchToProps);

const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withConnect,
  withSaga,
)(App);
