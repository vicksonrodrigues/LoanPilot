const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (err, request, response, next) => {
  console.error(
    new Error(
      `${err.name}: ${err.message}\t${request.method}\t${request.url}\t${request.headers.origin}`,
    ),
  );

  const status = response.statusCode ? response.statusCode : 500; // server error

  response.status(status).json({ error: err.message });

  next(err);
};

module.exports = { errorHandler, unknownEndpoint };
