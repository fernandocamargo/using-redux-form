import React from 'react';

export default ({ description }) => (
  <dl className="error">
    <dt>Error:</dt>
    <dd>{description}</dd>
  </dl>
);
