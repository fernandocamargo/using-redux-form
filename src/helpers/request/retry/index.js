export default callback => ({
  with: (...params) => response =>
    response.status === 500 ? callback(...params) : response.json(),
});
