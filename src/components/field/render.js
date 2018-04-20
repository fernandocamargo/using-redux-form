import React from 'react';
import { Field } from 'redux-form';

import * as Fields from 'components/fields';

export default ({ type, name, settings, ...field }) => (
  <Field name={name} component={Fields[type]} {...settings} {...field} />
);
