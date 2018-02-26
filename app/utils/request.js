import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Catch an error if cannot fetch url
 *
 * @param  {object} error  A error from fetch
 *
 * @return {object} Throws an error
 */
function catchError(err) {

  // Treat network errors without responses as 500s.
  const status = err.response ? err.response.status : 500,
        error = new Error(status);

  if (status === 404) {

    error.response = err.response;
    throw error;

  } else {
    /*
     * Error objects sent to the catch handler without a response property signal a network failure that was 
     * never able to receive a response from the server.
     */
    error.response = err.message;
    throw error;

  }

}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {

  if(options && options.queryParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(options.queryParams);
    delete options.queryParams;
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(catchError);
}

function queryParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}