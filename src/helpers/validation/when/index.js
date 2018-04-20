export default validation => ({
  warn: message => (...params) => !!validation(...params) && message,
  reject: message => (...params) =>
    !!validation(...params) && Promise.reject(message),
});
