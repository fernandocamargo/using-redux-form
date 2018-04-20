import getSettingsFrom from 'helpers/settings/get';

export default props => {
  const { name } = props;
  const settings = getSettingsFrom(props);

  return {
    form: name,
    ...settings,
  };
};
