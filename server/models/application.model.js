/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
  {
    appId: { type: String, required: true },
    businessName: {
      type: String,
      required: [true, "Business Name can't be blank"],
      minLength: [2, 'Business Name should contain at least two characters!'],
      trim: true,
    },
    businessTaxNumber: {
      type: String,
      required: [true, "Business Tax Number can't be blank"],
    },
    businessAddress: {
      type: String,
    },
    yearEstablished: {
      type: Number,
      required: [true, "Year Established can't be blank"],
    },
    businessType: {
      type: String,
      enum: {
        values: ['Sole Proprietorship', 'Partnership', 'Limited Liability', 'Corporation'],
        message: '{VALUE} is not supported',
      },
    },
    loanAmount: { type: Number, required: [true, "Loan Amount can't be blank"] },
    loanPurpose: { type: String },
    accountingProvider: {
      type: String,
      enum: {
        values: ['Xero', 'MYOB', 'Local'],
        message: '{VALUE} is not supported',
      },
    },
    decisionSummary: { type: mongoose.Schema.Types.ObjectId, ref: 'Decision' },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  },
  { timestamps: true },
);

applicationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Applications', applicationSchema);
