import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import React from 'react';
import SingleLoan from './SingleLoan';

const loans = [
  {
    id: '64f52253530e37a56eb8282e',
    appId: 'XBL3SSN3J7PU',
    businessName: 'BB Solution',
    businessTaxNumber: 'DFDFR8795642',
    businessAddress: 'c-12,13 addarsh complex, sec-2 , vashi',
    yearEstablished: '2020',
    businessType: 'Corporation',
    loanAmount: '256987',
    loanPurpose: 'Buy assests for company',
    accountingProvider: 'Local',
    createdAt: '1693786707182',
    decisionSummary: {
      id: '64f52314adada122fc086710',
      isApproved: true,
      loanApprovedValue: '41810.4',
      summaryBalSheet: [
        {
          year: '2020',
          profitOrLoss: '-185850',
          _id: '64f52314adada122fc086711',
        },
        {
          year: '2021',
          profitOrLoss: '252500',
          _id: '64f52314adada122fc086712',
        },
      ],
      preAssessment: '60',
      application: '64f52253530e37a56eb8282e',
    },
  },
  {
    _id: '64f52253530e37a56eb8282e',
    appId: 'XBL3SSN3J7PU',
    businessName: 'BB Solution',
    businessTaxNumber: 'DFDFR8795642',
    businessAddress: 'c-12,13 addarsh complex, sec-2 , vashi',
    yearEstablished: '2020',
    businessType: 'Corporation',
    loanAmount: '256987',
    loanPurpose: 'Buy assests for company',
    accountingProvider: 'Local',
    createdAt: '1693786707182',
    decisionSummary: {
      _id: '64f52314adada122fc086710',
      isApproved: true,
      loanApprovedValue: '41810.4',
      summaryBalSheet: [
        {
          year: '2020',
          profitOrLoss: '-185850',
          _id: '64f52314adada122fc086711',
        },
        {
          year: '2021',
          profitOrLoss: '252500',
          _id: '64f52314adada122fc086712',
        },
      ],
      preAssessment: '60',
      application: '64f52253530e37a56eb8282e',
    },
  },
];

const LoanTable = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log('Handle Expand', handleExpandClick);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell>Business Name</TableCell>
            <TableCell align="right">Loan Amount</TableCell>
            <TableCell align="right">Approved</TableCell>
            <TableCell align="right">Loan Amount Approved</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loans.map((loan) => (
            <SingleLoan key={loan.id} loan={loan} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LoanTable;
