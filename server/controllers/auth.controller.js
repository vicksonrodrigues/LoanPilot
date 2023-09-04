/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const loginRouter = require('express').Router();
const Customer = require('../models/customer.model');
const configVar = require('../config/configVar');
const loginLimiter = require('../middlewares/loginLimiter');

// customer login route
loginRouter.post('/login', loginLimiter, async (request, response) => {
  const { email, password } = request.body;
  // check for email & password fields
  if (!email || !password) {
    return response.status(400).json({ error: 'All fields are required' });
  }
  // checks email and password with the database
  const customer = await Customer.findOne({ email });
  const passwordCorrect =
    customer === null ? false : await bcrypt.compare(password, customer.passwordHash);
  if (!(customer && passwordCorrect)) {
    return response.status(404).json({
      error: 'No User Found: Check your Email or Password',
    });
  }
  // create access token
  const accessToken = jwt.sign(
    {
      email: customer.email,
      id: customer._id,
    },
    configVar.ACCESS_TOKEN_SECRET,
    { expiresIn: '15m' },
  );
  // create refresh token
  const refreshToken = jwt.sign(
    { email: customer.email, id: customer._id },
    configVar.REFRESH_TOKEN_SECRET,
    {
      expiresIn: '2d',
    },
  );

  // Create secure cookie with refresh token
  response.cookie('jwt', refreshToken, {
    httpOnly: true, // accessible only by web server
    // secure: true, // https
    sameSite: 'Lax', // cross-site cookie
    maxAge: 2 * 24 * 60 * 60 * 1000, // cookie expiry: set to match refreh token
  });
  response.json({ accessToken });
});

// refresh token route
loginRouter.get('/refresh', async (request, response) => {
  const { cookies } = request;

  if (!cookies?.jwt) return response.status(401).json({ error: 'Session Expired' });
  const refreshToken = cookies.jwt;
  // verify the cookie
  jwt.verify(refreshToken, configVar.REFRESH_TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      return response.status(401).json({ error: 'Unauthorized' });
    }
    const foundCustomer = await Customer.findOne({ email: decoded.email }).exec();

    if (!foundCustomer) {
      return response.status(401).json({ error: 'Invalid Token' });
    }

    const accessToken = jwt.sign(
      {
        email: foundCustomer.email,
        id: foundCustomer._id,
        belong: 'customer',
      },
      configVar.ACCESS_TOKEN_SECRET,
      { expiresIn: '5m' },
    );

    return response.json({ accessToken });
  });
});

// logout route: clears cookies i.e refresh token
loginRouter.post('/logout', async (request, response) => {
  const { cookies } = request;
  if (!cookies?.jwt) return response.sendStatus(204); // No content
  response.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
  response.json({ message: 'Cookie cleared' });
});

module.exports = loginRouter;
