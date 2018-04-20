import extract from 'helpers/settings/extract';
import async from 'helpers/validation/async';

export default ({ fields }) => {
  const settings = fields.reduce(extract, {
    fields: [],
    asyncBlurFields: [],
    asyncValidate: {},
  });

  return {
    ...settings,
    asyncValidate: async(settings),
  };
};
