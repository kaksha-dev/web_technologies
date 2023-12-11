const exceptionHandler = (res, error) => {
  res.status(500);
  res.send({
    name: error.name,
    message: error.message,
  });
};

module.exports = { exceptionHandler };
