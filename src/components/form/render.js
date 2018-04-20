import React from 'react';
import classnames from 'classnames';

import For from 'components/helpers/for';
import Field from 'components/field';

export default ({ name, title, handleSubmit, onSubmit, fields, children }) => (
  <form
    name={name}
    id={name}
    onSubmit={handleSubmit(onSubmit)}
    className={classnames('form', name)}
    noValidate={true}
  >
    <fieldset>
      <legend>{title}</legend>
      <For each={fields}>
        <Field />
      </For>
      {children}
    </fieldset>
  </form>
);
