import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import React from 'react';

const businessType = [
  {
    value: 'Sole Proprietorship',
    label: 'Sole Proprietorship',
  },
  {
    value: 'Partnership',
    label: 'Partnership',
  },
  {
    value: 'Limited Liability',
    label: 'Limited Liability',
  },
  {
    value: 'Corporation',
    label: 'Corporation',
  },
];

const accountingProvider = [
  {
    value: 'Local',
    label: 'Local(Test)',
  },
  {
    value: 'Xero',
    label: 'XERO',
  },
  {
    value: 'MYOB',
    label: 'MYOB',
  },
];

const LoanForm = () => (
  <>
    <Typography variant="h6" gutterBottom>
      Loan Application Form
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
          id="businessName"
          name="businessName"
          label="Business Name"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="businessTaxNumber"
          name="businessTaxNumber"
          label="Business Tax Number (GST)"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="address1"
          name="address1"
          label="Address"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="businessType"
          select
          label="Business Type"
          helperText="Please select type of business"
          variant="standard"
          fullWidth
        >
          {businessType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="yearEstablished"
          name="yearEstablished"
          label="Year Established"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="loanAmount"
          name="loanAmount"
          label="Loan Amount"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="loanPurpose"
          name="loanPurpose"
          label="Loan Purpose"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="accountingProvider"
          select
          label="Accounting Provider"
          helperText="Please select your accounting provider"
          variant="standard"
          fullWidth
        >
          {accountingProvider.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  </>
);

export default LoanForm;
