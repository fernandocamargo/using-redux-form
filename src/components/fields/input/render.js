import React from 'react';
import classnames from 'classnames';

import Error from 'components/error';

export default ({
  meta: { error, ...meta },
  input: { name, ...input },
  type,
  label,
  debugging,
}) => {
  const className = classnames(
    'field',
    'input',
    `type-${type}`,
    `name-${name}`,
    meta,
  );

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} {...input} />
      {debugging && <Error description={error} />}
    </div>
  );
};
