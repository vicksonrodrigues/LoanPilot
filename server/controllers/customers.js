const customerRouter = require('express').Router();
const Customer = require('../models/customer');

customerRouter.get('/', async (request, response) => {
  const customers = await Customer.find({}).populate('orders').populate('reservations');
  if (!customers?.length) {
    return response.status(400).json({ error: 'No customers found' }).end();
  }
  return response.json(customers).end();
});

module.exports = customerRouter;
