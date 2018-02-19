/**
 *
 * Asynchronously loads the component for BottomNav
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
