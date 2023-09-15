import React from 'react';
import * as yup from 'yup';
import { Box, Button, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import LoanForm from './LoanForm';
import BalanceSheet from './BalanceSheet';
import ReviewApplication from './ReviewApplication';

const steps = ['Loan Form', 'Review Balance Sheet', 'Review Application'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <LoanForm />;
    case 1:
      return <BalanceSheet />;
    case 2:
      return <ReviewApplication />;

    default:
      throw new Error('Unknown step');
  }
}

const LoanApplication = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .min(2, 'Must be 2 characters or more')
      .max(35, 'Maximum of 35 characters')
      .required('First Name is Required'),
    lastName: yup
      .string()
      .max(35, 'Maximum of 35 characters')
      .min(2, 'Must be 2 characters or more'),
    phone: yup
      .string()
      .min(10, 'Must contain 10 digits')

      .required('Phone No. is Required')
      .matches(/^[6-9]\d{9}$/, { message: 'Please enter valid number.' }),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    date: yup.date(),
    guests: yup
      .number()
      .max(8, 'Max no. of guests allowed is 8')
      .required('No. of guests is required'),
    specialRequest: yup.string().max(200, 'Maximum of 200 characters'),
  });
  console.log(validationSchema);
  return (
    <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
      <Typography component="h1" variant="h4" align="center">
        Loan Application
      </Typography>
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography variant="h5" gutterBottom>
            Application successfully submitted.
          </Typography>
          <Typography variant="subtitle1">
            Your loan application number is #2001539. You can check the status of your application
            in View Applications section
          </Typography>
        </>
      ) : (
        <>
          {getStepContent(activeStep)}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                Back
              </Button>
            )}

            <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
              {activeStep === steps.length - 1 ? 'Submit Application' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default LoanApplication;
