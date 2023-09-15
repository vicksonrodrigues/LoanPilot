import { Grid, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Authentication = () => {
  const [form, setForm] = useState('Login');
  const handleChange = (event, newForm) => {
    if (newForm !== null) {
      setForm(newForm);
    }
  };
  return (
    <Grid
      container
      sx={{
        background:
          'linear-gradient(21deg, rgba(0,255,201,1) 2%, rgba(9,121,93,1) 43%, rgba(0,21,65,1) 80%)',
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        p: '32px',
      }}
    >
      <Grid
        item
        md={7}
        display="flex"
        flexDirection="column"
        p={4}
        width={1}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h2" color="white" mb={3} fontWeight="bold" textAlign="center">
          Welcome to Loan Pilot
        </Typography>
        <Typography variant="h5" color="white" textAlign="center">
          Your trusted co-pilot on the journey to financial success.Navigate your loan application
          with ease and confidence.
        </Typography>
      </Grid>
      <Grid
        item
        md={4}
        width={1}
        p={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '25px',
          height: 'auto',
        }}
      >
        <ToggleButtonGroup
          value={form}
          onChange={handleChange}
          exclusive
          sx={{ display: 'flex', width: '100%' }}
          size="large"
          fullWidth
        >
          <ToggleButton
            value="Login"
            component={Link}
            to="/auth/login"
            sx={{
              borderRadius: '50px',

              border: 2,
              borderColor: 'white',
              p: 1,

              '&.MuiToggleButton-root.Mui-selected': {
                backgroundColor: 'secondary.light',
                '.MuiTypography-root': {
                  color: 'black',
                },
              },
            }}
          >
            <Typography variant="subtitle2" color="white">
              Login
            </Typography>
          </ToggleButton>
          <ToggleButton
            value="SignUp"
            component={Link}
            to="/auth/signup"
            sx={{
              borderRadius: '50px',
              border: 2,
              borderColor: 'white',
              p: 1,

              '&.MuiToggleButton-root.Mui-selected': {
                backgroundColor: 'secondary.main',
                '.MuiTypography-root': {
                  color: 'black',
                },
              },
            }}
          >
            <Typography variant="subtitle2" color="white">
              Sign Up
            </Typography>
          </ToggleButton>
        </ToggleButtonGroup>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Authentication;
