export default ({
  meta: { active: focused, dirty, invalid, touched, error },
}) => ({
  debugging: touched && dirty && !focused && error,
});
