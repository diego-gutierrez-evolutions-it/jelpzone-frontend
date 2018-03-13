/*
 * LoginConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'jelpzone/Login/CHANGE_USERNAME';
export const CHANGE_PASSWORD = 'jelpzone/Login/CHANGE_PASSWORD';

/*
 * Relative url configuration
 * We define only one relative path for each metod
 *
 * Follow this format:
 * export const URL_RELATIVE_PATH_RESOURCE = 'relative/path/resource';
 */
export const URL_USER_LOGIN = 'Users/login';
