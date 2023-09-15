import { Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';

const AppCard = () => (
  <Card raised sx={{ width: '100%', p: '8px', borderRadius: '25px' }}>
    <CardContent>
      <Typography gutterBottom variant="h5" fontWeight="bold" component="div">
        Loan Applications Overview
      </Typography>
      <Stack>
        <Typography variant="overline" fontWeight="bold">
          Number of Application:
        </Typography>
        <Typography variant="subtitle2" color="secondary.main">
          10
        </Typography>
        <Typography variant="overline" fontWeight="bold">
          Application Approved:
        </Typography>
        <Typography variant="subtitle2" color="secondary.main">
          10
        </Typography>
        <Typography variant="overline" fontWeight="bold">
          Application Rejected:
        </Typography>
        <Typography variant="subtitle2" color="secondary.main">
          0
        </Typography>
      </Stack>
    </CardContent>
  </Card>
);

export default AppCard;
