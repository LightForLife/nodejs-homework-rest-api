const HttpError = (status, message) => {
  const error = new Error();
  error.status = status;
  error.message = message;
  console.log(error.status);

  return error;
};

module.exports = HttpError;
