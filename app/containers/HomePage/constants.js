/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const TOGGLE_EXTRA_INFORMATION = 'jelpzone/Home/TOGGLE_EXTRA_INFORMATION';

export const LOAD_ALL_PROFESSIONALS = 'jelpzone/Home/LOAD_ALL_PROFESSIONALS';
export const LOAD_ALL_PROFESSIONALS_SUCCESS = 'jelpzone/Home/LOAD_ALL_PROFESSIONALS_SUCCESS';
export const LOAD_ALL_PROFESSIONALS_ERROR = 'jelpzone/Home/LOAD_ALL_PROFESSIONALS_ERROR';

export const URL_GET_PROFESSIONALS = 'Users';