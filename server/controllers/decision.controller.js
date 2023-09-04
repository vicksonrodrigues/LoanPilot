const decisionRouter = require('express').Router();
const decisionHandler = require('../middlewares/decisionHandler');
const Application = require('../models/application.model');
const Decision = require('../models/decision.model');

/* eslint-disable radix */

const calcProfit12Months = (balanceSheet) => {
  const result = balanceSheet
    .slice(0, 12)
    .reduce((totalProfit, curr) => totalProfit + curr.profitOrLoss, 0);
  return result;
};

const calcAvgAssetsValue12Months = (balanceSheet) => {
  const result = balanceSheet
    .slice(0, 12)
    // eslint-disable-next-line no-return-assign
    .reduce((totalAssetsValue, curr) => totalAssetsValue + curr.assetsValue, 0);
  if (balanceSheet.length > 12) {
    return result / 12;
  }
  return result / balanceSheet.length;
};

const calcPreAssessment = (loanAmount, balanceSheet) => {
  let preAssessment = 20;
  const profit12Months = calcProfit12Months(balanceSheet);
  const avgAssetValue12Months = calcAvgAssetsValue12Months(balanceSheet);

  if (profit12Months > 0) {
    preAssessment = 60;
  }

  if (avgAssetValue12Months > loanAmount) {
    preAssessment = 100;
  }

  return preAssessment;
};

const calcSummary = (balanceSheet) => {
  const sliceBalanceSheet = balanceSheet.reduce((acc, cur) => {
    const { year } = cur;
    const profit = cur.profitOrLoss;
    if (!acc[year]) {
      acc[year] = 0;
    }
    acc[year] += profit;

    return acc;
  }, {});

  const summary = Object.entries(sliceBalanceSheet).map(([year, profit]) => ({
    year: parseInt(year),
    profitOrLoss: parseInt(profit),
  }));

  return summary;
};

const calcApprovedLoanValue = (amount, preAssessment) => (amount * preAssessment) / 100;

// send summarised application to decision engine
// eslint-disable-next-line consistent-return
decisionRouter.post('/outcome', async (request, response) => {
  const { bName, bYear, balanceSheet, appId, loanAmount } = request.body;

  if (!bName || !bYear || !balanceSheet || !appId || !loanAmount) {
    return response.status(400).json({ error: 'Fill all required fields' });
  }

  const preAssessment = calcPreAssessment(loanAmount, balanceSheet);
  const summary = calcSummary(balanceSheet);

  console.log('Sending request to decision engine');

  const payload = {
    name: bName,
    yearEstablished: bYear,
    preAssessment,
    summary,
  };
  // get decision from the decision engine
  const finalOutcome = await decisionHandler.getDecision(payload);

  if (finalOutcome.error) {
    response.status(400).json(finalOutcome.error);
  } else {
    response.send(finalOutcome);
  }

  const application = await Application.findById(appId);

  const loanApprovedValue = calcApprovedLoanValue(loanAmount, preAssessment);

  const newDecision = await Decision({
    isApproved: finalOutcome.isApproved,
    loanApprovedValue,
    summaryBalSheet: summary,
    preAssessment,
    application: appId,
  });

  const savedDecision = await newDecision.save();
  application.decisionSummary = savedDecision._id;
  await application.save();
  return response.json(savedDecision);
});
module.exports = decisionRouter;
