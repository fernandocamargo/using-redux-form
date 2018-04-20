import React from 'react';
import classnames from 'classnames';

import Form from 'components/form';

import './styles.css';

export default ({ fields, handleSubmit }) => (
  <Form
    name="registration"
    title="Register Account"
    fields={fields}
    onSubmit={data => console.log('submit();', data)}
  >
    <div className={classnames('control', 'submit')}>
      <button type="submit">Submit!</button>
    </div>
  </Form>
);
