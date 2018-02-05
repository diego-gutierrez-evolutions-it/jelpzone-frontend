/*
 * Get the user saved in the session storage
 *
 */
export const getUser = () => {
	return JSON.parse(sessionStorage.getItem('user'));
}

/*
 * Set the user saved in the session storage
 *
 * @param Object user User to be stored
 */
export const setUser = (user) => {
	return sessionStorage.setItem('user',JSON.stringify(user));
}