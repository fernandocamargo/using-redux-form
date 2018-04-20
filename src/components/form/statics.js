import { string, node, arrayOf, shape, oneOf, object, func } from 'prop-types';

import * as Fields from 'components/fields';

export const displayName = 'Form';

export const propTypes = {
  name: string.isRequired,
  title: node,
  fields: arrayOf(
    shape({
      type: oneOf(Object.keys(Fields)).isRequired,
      name: string.isRequired,
      label: node.isRequired,
      settings: object,
    }),
  ),
  onSubmit: func.isRequired,
  children: node,
};

export const defaultProps = {
  fields: [],
};
