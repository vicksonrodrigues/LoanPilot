import { Grid, Typography } from '@mui/material';
import React from 'react';

const review = {
  businessName: 'BB Solution',
  businessTaxNumber: 'DFDFR8795642',
  businessAddress: 'c-12,13 addarsh complex, sec-2 , vashi',
  yearEstablished: '2020',
  businessType: 'Corporation',
  loanAmount: '256987',
  loanPurpose: 'Buy assests for company',
  accountingProvider: 'Local',
};

const ReviewApplication = () => (
  <>
    <Typography variant="h6" gutterBottom>
      Application summary
    </Typography>
    <Grid container>
      <Grid item xs={12} display="flex" alignItems="center">
        <Typography variant="overline" fontWeight="bold">
          Business Name:
        </Typography>
        <Typography variant="subtitle1">{review.businessName}</Typography>
      </Grid>
      <Grid item xs={12} display="flex" alignItems="center">
        <Typography variant="overline" fontWeight="bold">
          Business Tax Number(GST):
        </Typography>
        <Typography variant="subtitle1">{review.businessTaxNumber}</Typography>
      </Grid>
      <Grid item xs={12} display="flex" alignItems="center">
        <Typography variant="overline" fontWeight="bold">
          Business Address:
        </Typography>
        <Typography variant="subtitle1">{review.businessAddress}</Typography>
      </Grid>
      <Grid item xs={12} display="flex" alignItems="center">
        <Typography variant="overline" fontWeight="bold">
          Business Type:
        </Typography>
        <Typography variant="subtitle1">{review.businessType}</Typography>
      </Grid>
      <Grid item xs={12} display="flex" alignItems="center">
        <Typography variant="overline" fontWeight="bold">
          Year Established
        </Typography>
        <Typography variant="subtitle1">{review.yearEstablished}</Typography>
      </Grid>
      <Grid item xs={12} display="flex" alignItems="center">
        <Typography variant="overline" fontWeight="bold">
          Loan Amount:
        </Typography>
        <Typography variant="subtitle1">{review.loanAmount}</Typography>
      </Grid>
      <Grid item xs={12} display="flex" alignItems="center">
        <Typography variant="overline" fontWeight="bold">
          Loan Purpose:
        </Typography>
        <Typography variant="subtitle1">{review.loanPurpose}</Typography>
      </Grid>
      <Grid item xs={12} display="flex" alignItems="center">
        <Typography variant="overline" fontWeight="bold">
          Accounting Provider:
        </Typography>
        <Typography variant="subtitle1">{review.accountingProvider}</Typography>
      </Grid>
    </Grid>
  </>
);

export default ReviewApplication;
