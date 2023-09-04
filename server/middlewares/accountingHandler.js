const sampleBalSheet = require('../data/sampleBalSheet');
require('dotenv').config();

// eslint-disable-next-line consistent-return
const getBalanceSheet = async (businessDetails, accSoft) => {
  try {
    const qs = new URLSearchParams(businessDetails);
    const accountingSoftware = accSoft.toString().toUpperCase();
    if (accSoft !== null) {
      let balanceSheet;
      switch (accountingSoftware) {
        // generating dummy balance sheet
        case 'LOCAL': {
          balanceSheet = await sampleBalSheet(businessDetails);
          break;
        }
        case 'XERO': {
          const XERO_URL = `${process.env.XERO_URL}/balSheet?${qs.toString()}`;
          console.log('XERO_URL', XERO_URL);
          throw new Error('Cannot use XERO accounting service currently');
        }
        case 'MYOB': {
          const MYOB_URL = `${process.env.MYOB_URL}/balSheet?${qs.toString()}`;
          console.log('MYOB_URL', MYOB_URL);
          throw new Error('Cannot use MYOB accounting service currently');
        }
        default:
          throw new Error('No such Accounting Software is Available');
      }
      if (balanceSheet === undefined) {
        throw new Error('Error while fetching balance sheet');
      }
      return balanceSheet;
    }
  } catch (err) {
    return { error: err };
  }
};

module.exports = { getBalanceSheet };
