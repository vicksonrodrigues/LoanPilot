const applicationRouter = require('express').Router();
const { customAlphabet } = require('nanoid');
const Application = require('../models/application.model');
const Customer = require('../models/customer.model');

const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
const nanoid = customAlphabet(alphabet, 12);

// get a single loan application
applicationRouter.get('/:id', async (request, response) => {
  const application = await Application.findById(request.params.id).populate('decisionSummary');
  if (!application) {
    return response.status(404).json({ error: 'Customer is not available in database' }).end();
  }
  return response.json(application).end();
});

// create a new loan application
applicationRouter.post('/', async (request, response) => {
  const {
    businessName,
    businessTaxNumber,
    businessAddress,
    yearEstablished,
    businessType,
    loanAmount,
    loanPurpose,
    accountingProvider,
    customerId,
  } = request.body;

  if (!businessName || !businessTaxNumber || !yearEstablished || !loanAmount || !customerId) {
    return response.status(400).json({ error: 'Submit all required fields' });
  }

  const customer = await Customer.findById(customerId);

  const newApplication = new Application({
    appId: nanoid(),
    businessName,
    businessTaxNumber,
    businessAddress,
    yearEstablished,
    businessType,
    loanAmount,
    loanPurpose,
    accountingProvider,
    customer: customerId,
  });
  const savedApplication = await newApplication.save();
  customer.loanApplications = customer.loanApplications.concat(savedApplication._id);
  await customer.save();
  return response.json(savedApplication);
});

module.exports = applicationRouter;
