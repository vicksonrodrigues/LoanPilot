import { Paper, Typography } from '@mui/material';
import React from 'react';
import LoanTable from './LoanTable';

const LoanList = () => (
  <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
    <Typography component="h1" variant="h4" align="center">
      Loan OverView
    </Typography>
    <LoanTable />
  </Paper>
);

export default LoanList;
