const customerRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const Customer = require('../models/customer.model');

// all customer: just for testing purpose
customerRouter.get('/', async (request, response) => {
  const customers = await Customer.find({});
  if (!customers?.length) {
    return response.status(400).json({ error: 'No customers found' }).end();
  }
  return response.json(customers).end();
});

// get a single customer
customerRouter.get('/:id', async (request, response) => {
  if (request.params.id === request.customerId) {
    const customer = await Customer.findById(request.params.id);
    if (!customer) {
      return response.status(404).json({ error: 'Customer is not available in database' }).end();
    }
    return response.json(customer).end();
  }
  return response.status(401).json({ error: 'token missing or invalid' }).end();
});

// create a new customer (sign up)
customerRouter.post('/', async (request, response) => {
  const { firstName, lastName, phone, email, password } = request.body;

  if (!email || !password || !firstName) {
    return response.status(400).json({ error: 'Submit all required fields' });
  }

  const existingCustomer = await Customer.findOne({ email });
  if (existingCustomer) {
    return response.status(400).json({
      error: 'Customer with same email exists',
    });
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const customer = new Customer({
    firstName,
    lastName,
    phone,
    email,
    passwordHash,
  });
  const savedCustomer = await customer.save();

  return response.status(201).json(savedCustomer);
});

module.exports = customerRouter;
