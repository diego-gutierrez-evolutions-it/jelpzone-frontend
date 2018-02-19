/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import BottomNav from 'components/BottomNavigation';
import Header from 'components/Header';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiThemeProvider as NewMuiThemeProvider, createMuiTheme } from 'material-ui-next/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const AppWrapper = styled.div`
  text-align: center;
`;

const theme = createMuiTheme({
  palette: {},
});


export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Jelpzone"
        defaultTitle="Jelpzone"
      >
        <meta name="description" content="JelpZone" />
      </Helmet>
      <MuiThemeProvider>
        <NewMuiThemeProvider theme={theme}>
          <div className="container">

            <Header />

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/signup" component={SignupPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="" component={NotFoundPage} />
            </Switch>

            <BottomNav />

          </div>
        </NewMuiThemeProvider>
      </MuiThemeProvider>
    </AppWrapper>
  );
}
