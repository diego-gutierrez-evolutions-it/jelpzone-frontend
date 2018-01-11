/**
 *
 * Asynchronously loads the component for ServicesMap
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
