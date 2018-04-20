import property from 'helpers/object/property';
import * as API from 'api';

export default () => ({
  then: callback => value =>
    API.isValidIBAN(value)
      .then(property('valid'))
      .then(callback),
});
