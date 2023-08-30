/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "can't be blank"],
      minLength: [2, 'Name should contain at least two characters!'],
      trim: true,
    },
    lastName: { type: String, trim: true },
    businessName: {
      type: String,
      required: [true, "can't be blank"],
      minLength: [2, 'Business Name should contain at least two characters!'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "can't be blank"],
      minLength: 10,
      match: [/^[6-9]\d{9}$/, 'should follow the correct format for phone number'],
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [
        /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i,
        'should match the correct format for email address',
      ],
      trim: true,
      immutable: true,
    },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true },
);

customerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

module.exports = mongoose.model('Customer', customerSchema);
