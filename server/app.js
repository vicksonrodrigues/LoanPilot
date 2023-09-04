require('express-async-errors');
const express = require('express');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const verifyJWT = require('./middlewares/verifyJWT');
const { unknownEndpoint, errorHandler } = require('./middlewares/errorHandler');

const customerRouter = require('./controllers/customers.controller');
const authRouter = require('./controllers/auth.controller');
const applicationRouter = require('./controllers/applications.controller');
const decisionRouter = require('./controllers/decision.controller');
const accountingRouter = require('./controllers/accounting.controller');

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(verifyJWT);
app.use(express.static('build'));
app.use('/api/auth', authRouter);
app.use('/api/customers', customerRouter);
app.use('/api/application', applicationRouter);
app.use('/api/accounting', accountingRouter);
app.use('/api/decision', decisionRouter);
app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
