import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { makeSelectCurrentUser, selectGlobal } from 'containers/App/selectors';

/*
 * If user is null, the user is redirected to /login?redirect=%2profile
 * Otherwise, The Wrapped component is rendered
 *
 */
export const userIsAuthenticated = connectedRouterRedirect({
   // The url to redirect user to if they fail
  redirectPath: '/login',
   // If selector is true, wrapper will not redirect
  authenticatedSelector: (state) => {
  	const getSelectCurrentUser = makeSelectCurrentUser();
  	return getSelectCurrentUser(state) !== null;
  },
  // A nice display name for this check
  wrapperDisplayName: 'UserIsAuthenticated'
});

/*
 * If a user is already logged in, but navigates to our login page, we may want to send them to a landing page 
 * (/landing). Luckily we can easily do both of these with another wrapper.
 *
 */
const locationHelper = locationHelperBuilder({});
export const userIsNotAuthenticated = connectedRouterRedirect({
  /*
   * This sends the user either to the query param route if we have one, or to the landing page if none is 
   * specified and the user is already logged in
   */ 
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
  // This prevents us from adding the query parameter when we send the user away from the login page
  allowRedirectBack: false,
   // If selector is true, wrapper will not redirect
   // So if there is no user data, then we show the page
  authenticatedSelector: (state) => {
  	const getSelectCurrentUser = makeSelectCurrentUser();
  	return getSelectCurrentUser(state) === null;
  },
  // A nice display name for this check
  wrapperDisplayName: 'UserIsNotAuthenticated'
});