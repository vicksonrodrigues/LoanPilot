import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Loan = () => {
  console.log('Loans');
  return (
    <Box p={2} border={1} width={1} sx={{ minHeight: 'calc(100vh - 70px)' }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={{ xs: 1, md: 4 }}
        color="primary.light"
        textAlign="center"
        border={1}
        borderColor="primary.main"
        sx={{ borderStyle: 'outset', borderWidth: '5px' }}
        p={1}
      >
        Loans Dashboard
      </Typography>
      <Grid container direction={{ xs: 'column', md: 'row' }}>
        <Grid item width={1} md={2} mr={6} mb={{ xs: 2, md: 0 }}>
          <SideBar />
        </Grid>
        <Grid item md={9} width={1}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Loan;
