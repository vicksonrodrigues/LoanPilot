/* eslint-disable no-plusplus */
const { customAlphabet } = require('nanoid');

const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
const nanoid = customAlphabet(alphabet, 12);

const createBalanceSheet = (year) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const balSheet = [];
  // eslint-disable-next-line radix
  for (let i = parseInt(year); i <= currentYear; i++) {
    for (let j = 1; j <= 12; j++) {
      if (i === currentYear && j === currentMonth) {
        break;
      }
      const monthly = {
        year: i,
        month: j,
        profitOrLoss: Math.ceil(Math.random() * 2000000) * (Math.round(Math.random()) ? 1 : -1),
        assetsValue: Math.ceil(Math.random() * 200000),
      };
      balSheet.push(monthly);
    }
  }

  balSheet.sort((a, b) => {
    if (a.year === b.year) {
      return b.month - a.month;
    }
    return b.year - a.year;
  });

  return balSheet;
};

const sampleBalSheet = (businessDetails) => {
  const balSheet = {
    balId: nanoid(),
    businessName: businessDetails.businessName,
    yearEstablished: businessDetails.yearEstablished,
    sheet: createBalanceSheet(businessDetails.yearEstablished),
  };
  return balSheet;
};

module.exports = sampleBalSheet;
