require('express-async-errors');
const express = require('express');

const cors = require('cors');

const customerRouter = require('./controllers/customers');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('build'));
app.use('/api/customers', customerRouter);

module.exports = app;
