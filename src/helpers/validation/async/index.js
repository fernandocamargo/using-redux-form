import warn from 'helpers/validation/warn';

export default ({ asyncValidate }) => (values, dispatch, props, field) => {
  const promise = asyncValidate[field];
  const value = values[field];

  return promise ? promise(value).catch(warn(field)) : Promise.resolve();
};
