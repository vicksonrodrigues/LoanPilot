import {
  Grid,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Stack,
  Divider,
} from '@mui/material';
import React from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const SingleLoan = (props) => {
  const { loan } = props;
  const [open, setOpen] = React.useState(false);

  // eslint-disable-next-line radix
  const date = new Date(parseInt(loan.createdAt));
  const loanDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return (
    <>
      <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell padding="checkbox">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {loanDate}
        </TableCell>
        <TableCell component="th" scope="row">
          {loan.businessName}
        </TableCell>
        <TableCell align="right">{loan.loanAmount}</TableCell>
        <TableCell align="right">
          {loan.decisionSummary.isApproved ? (
            <CheckCircleIcon color="success" />
          ) : (
            <CancelIcon color="error" />
          )}
        </TableCell>
        <TableCell align="right">{Math.floor(loan.decisionSummary.loanApprovedValue)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: '0', paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid
              container
              sx={{ margin: 1, marginBottom: 3 }}
              direction={{ xs: 'column', md: 'row' }}
            >
              <Grid item xs={5}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  gutterBottom
                  component="div"
                  color="secondary.light"
                  sx={{ textDecoration: 'underline' }}
                >
                  Details
                </Typography>
                <Stack direction="row" alignItems="center">
                  <Typography variant="overline" fontWeight="bold" mr={1} noWrap>
                    Business Tax Number(GST):
                  </Typography>
                  <Typography variant="caption">{loan.businessTaxNumber}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Typography variant="overline" fontWeight="bold" mr={1}>
                    Year Established:
                  </Typography>
                  <Typography variant="caption">{loan.yearEstablished}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Typography variant="overline" fontWeight="bold" mr={1}>
                    Business Type:
                  </Typography>
                  <Typography variant="caption">{loan.businessType}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Typography variant="overline" fontWeight="bold" mr={1}>
                    Pre Assessment:
                  </Typography>
                  <Typography variant="caption">{loan.decisionSummary.preAssessment}</Typography>
                </Stack>
              </Grid>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ ml: 1, mr: 4, display: { xs: 'none', md: 'flex' } }}
              />
              <Grid item xs={6}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  fontWeight="bold"
                  color="secondary.light"
                  sx={{ textDecoration: 'underline' }}
                >
                  Balance Sheet Summary
                </Typography>
                <Stack direction="row" alignItems="center" mb={1}>
                  <Typography variant="overline" fontWeight="bold" mr={1}>
                    Accounting Provider:
                  </Typography>
                  <Typography variant="caption">{loan.accountingProvider}</Typography>
                </Stack>
                <Table size="small" component={Paper}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Year</TableCell>
                      <TableCell>Profit/Loss</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {loan.decisionSummary.summaryBalSheet.map((row) => (
                      <TableRow key={row.year}>
                        <TableCell component="th" scope="row">
                          {row.year}
                        </TableCell>
                        <TableCell>{row.profitOrLoss}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default SingleLoan;
