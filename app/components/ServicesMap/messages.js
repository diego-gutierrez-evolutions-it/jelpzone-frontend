/*
 * ServicesMap Messages
 *
 * This contains all the text for the ServicesMap component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  browserNotSupportGeolocation: {
    id: 'jelzpone.components.ServicesMap.geolocation.not_support',
    defaultMessage: 'Your browser does not support Geolocation',
  },
  geolocationNotEnabled: {
    id: 'jelzpone.components.ServicesMap.geolocation.not_enabled',
    defaultMessage: 'Geolocation is not enabled',
  },
  gettingGeolocation: {
    id: 'jelzpone.components.ServicesMap.geolocation.getting',
    defaultMessage: 'Getting the location data&hellip;',
  },
});
