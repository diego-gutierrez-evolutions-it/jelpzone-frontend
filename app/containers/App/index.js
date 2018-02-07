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

import HomePage from 'containers/HomePage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import BottomNav from 'components/BottomNav/Loadable';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiThemeProvider as NewMuiThemeProvider, createMuiTheme } from 'material-ui-next/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { userIsAuthenticated, userIsNotAuthenticated } from 'utils/authWrapper';
import injectSaga from 'utils/injectSaga';

import { loadingUser } from './actions';
import saga from './saga';

const AppWrapper = styled.div`
  text-align: center;
`;

const theme = createMuiTheme({
  palette: {},
});


export class App extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount() {
    {/* TODO: unncomment on prod this.props.loadCurrentUser();  */}
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

              <Switch>
                <Route exact path="/" component={ HomePage } /> {/* TODO: unncomment on prod userIsAuthenticated(HomePage)  */}
                <Route exact path="/signup" component={ SignupPage } /> {/* TODO: unncomment on prod userIsNotAuthenticated(SignupPage)  */}
                <Route path="/login" component={ LoginPage } /> {/* TODO: unncomment on prod userIsNotAuthenticated(LoginPage)  */}
                <Route path="" component={NotFoundPage} />
              </Switch>

              <BottomNav />

            </div>
          </NewMuiThemeProvider>
        </MuiThemeProvider>
      </AppWrapper>
    );
  }
}

HomePage.propTypes = {
  loadCurrentUser: PropTypes.func,
}

const mapDispatchToProps = {
  loadCurrentUser: loadingUser,
};

const withConnect = connect(null, mapDispatchToProps);

const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withConnect,
  withSaga,
)(App);
