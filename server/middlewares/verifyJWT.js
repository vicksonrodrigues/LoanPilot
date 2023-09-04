/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const config = require('../config/configVar');

const verifyJWT = (request, response, next) => {
  const authHeader = request.headers.authorization || request.headers.Authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, config.ACCESS_TOKEN_SECRET, async (err, decoded) => {
      if (err) {
        return response.status(401).json({ err });
      }
      if (decoded) {
        request.email = decoded.email;
        request.customerId = decoded.id;
      }
      next();
    });
  } else {
    console.log('No Auth Header');
    next();
  }
};

module.exports = verifyJWT;
