import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';
import User from '../../assets/User.png';

const UserCard = () => (
  <Card raised sx={{ width: '100%', p: '8px', borderRadius: '25px' }}>
    <CardMedia
      sx={{
        minHeight: 250,
        width: 250,
        objectFit: 'contain',
        marginX: 'auto',
      }}
      image={User}
      title="User Profile"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" fontWeight="bold" component="div" textAlign="center">
        My Profile
      </Typography>
      <Stack>
        <Typography variant="overline" fontWeight="bold">
          Name:
        </Typography>
        <Typography variant="subtitle2" color="secondary.main">
          Vickson Rodrigues
        </Typography>
        <Typography variant="overline" fontWeight="bold">
          Phone:
        </Typography>
        <Typography variant="subtitle2" color="secondary.main">
          8879926904
        </Typography>
        <Typography variant="overline" fontWeight="bold">
          Email:
        </Typography>
        <Typography variant="subtitle2" color="secondary.main">
          vickson.rodrigues@gmail.com
        </Typography>
        <Typography variant="overline" fontWeight="bold">
          Created at:
        </Typography>
        <Typography variant="subtitle2" color="secondary.main">
          2nd December 2019
        </Typography>
      </Stack>
    </CardContent>
  </Card>
);

export default UserCard;
