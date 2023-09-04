require('dotenv').config();

const getDecision = async (payload) => {
  try {
    console.log('Data Recieved By DecisionEngine', payload);
    const response = {
      isApproved: true,
    };
    return response;
  } catch (err) {
    return { error: err };
  }
};
module.exports = { getDecision };
