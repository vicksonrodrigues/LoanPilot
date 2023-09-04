const accountingRouter = require('express').Router();
const accHandler = require('../middlewares/accountingHandler');

// get balance sheet
accountingRouter.get('/fetchBalSheet', async (request, response) => {
  const { bName, bYear, accSoft } = request.query;

  if (!bName || !bYear || !accSoft) {
    return response.status(400).json({ error: 'Fill all required fields' });
  }
  const businessDetails = {
    businessName: bName,
    yearEstablished: bYear,
  };

  const balanceSheet = await accHandler.getBalanceSheet(businessDetails, accSoft);

  if (balanceSheet.error) {
    return response.status(404).json({ error: balanceSheet.error.message });
  }
  return response.send(balanceSheet);
});
module.exports = accountingRouter;
