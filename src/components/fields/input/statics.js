import { string } from 'prop-types';

export const displayName = 'Fields/Input';

export const propTypes = {
  type: string.isRequired,
};

export const defaultProps = {
  type: 'text',
};
