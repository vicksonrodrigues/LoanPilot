/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

const decisionSchema = new mongoose.Schema(
  {
    isApproved: { type: Boolean, default: false },
    loanApprovedValue: { type: Number },
    summaryBalSheet: [
      {
        year: { type: Number, required: true },
        profitOrLoss: { type: Number, required: true },
      },
    ],
    preAssessment: { type: Number, required: true, default: 20 },
    application: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
    },
  },
  { timestamps: true },
);

decisionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Decision', decisionSchema);
