export default ({ fields, asyncBlurFields, asyncValidate }, field) => {
  const { name, validateOnBlur, validateAsyncly } = field;

  return {
    fields: fields.concat(field),
    asyncBlurFields: !validateOnBlur
      ? asyncBlurFields
      : asyncBlurFields.concat(name),
    asyncValidate: !validateAsyncly
      ? asyncValidate
      : Object.assign(asyncValidate, {
          [name]: validateAsyncly,
        }),
  };
};
