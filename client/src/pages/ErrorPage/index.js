import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <Container maxWidth="md">
    <Box textAlign="center" mt={10}>
      <Typography variant="h1" color="primary" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="h4" color="textSecondary" gutterBottom>
        Something went wrong.
      </Typography>
      <Typography variant="body1" color="textSecondary">
        The page you are looking for may not exist or there was an error in the application.
      </Typography>
      <Button sx={{ mt: '20px' }} variant="outlined" component={Link} to="/profile">
        Go back to main page
      </Button>
    </Box>
  </Container>
);

export default ErrorPage;
