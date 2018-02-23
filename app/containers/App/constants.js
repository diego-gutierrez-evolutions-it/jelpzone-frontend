/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_CURRENT_USER = 'jelpzone/App/LOAD_CURRENT_USER';
export const LOAD_CURRENT_USER_SUCCESS = 'jelpzone/App/LOAD_CURRENT_USER_SUCCESS';
export const LOAD_CURRENT_USER_ERROR = 'jelpzone/App/LOAD_CURRENT_USER_ERROR';
export const AUTH_USER = 'jelpzone/App/AUTH_USER';
export const AUTH_USER_SUCCESS = 'jelpzone/App/AUTH_USER_SUCCESS';
export const AUTH_USER_ERROR = 'jelpzone/App/AUTH_USER_ERROR';
export const LOGOUT_USER = 'jelpzone/App/LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'jelpzone/App/LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR = 'jelpzone/App/LOGOUT_USER_ERROR';

export const DEFAULT_LOCALE = 'en';

/*
 * Relative url configuration
 * We define only one relative path for each metod
 *
 * Follow this format:
 * export const URL_RELATIVE_PATH_RESOURCE = 'relative/path/resource';
 */
export const URL_USER_FROM_TOKEN = 'Users/';
