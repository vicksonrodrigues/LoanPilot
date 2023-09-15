import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

const sheet = [
  {
    year: 2020,
    month: 12,
    profitOrLoss: 250000,
    assetsValue: 1234,
  },
  {
    year: 2020,
    month: 11,
    profitOrLoss: 1150,
    assetsValue: 5789,
  },
  {
    year: 2020,
    month: 10,
    profitOrLoss: 2500,
    assetsValue: 22345,
  },
  {
    year: 2020,
    month: 9,
    profitOrLoss: -187000,
    assetsValue: 223452,
  },
];

const BalanceSheet = () => (
  <>
    <Typography variant="h6" gutterBottom>
      Review Balance Sheet
    </Typography>
    <Typography variant="subtitle2" gutterBottom>
      Accounting Software: Xero
    </Typography>
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell>Month</TableCell>
            <TableCell>Profit/Loss</TableCell>
            <TableCell>Assets Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sheet.map((row) => (
            <TableRow key={row.assetsValue}>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.month}</TableCell>
              <TableCell>{row.profitOrLoss}</TableCell>
              <TableCell>{row.assetsValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </>
);

export default BalanceSheet;
