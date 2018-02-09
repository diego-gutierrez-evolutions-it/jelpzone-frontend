/**
 *
 * Asynchronously loads the component for ProfessionalInformationPanel
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
