import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import UserCard from './UserCard';
import AppCard from './AppCard';

const Profile = () => {
  console.log('Profile');
  return (
    <Box p={2} border={1} width={1} sx={{ minHeight: 'calc(100vh - 70px)' }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        color="primary.light"
        textAlign="center"
        border={1}
        borderColor="primary.main"
        p={1}
        sx={{ borderStyle: 'outset', borderWidth: '5px' }}
      >
        Your Profile Dashboard
      </Typography>
      <Grid
        container
        direction={{ xs: 'column', md: 'row' }}
        p={1}
        border={1}
        borderRadius={10}
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        display="flex"
      >
        <Grid item xs={6} p={2} display="flex" width={1}>
          <UserCard />
        </Grid>
        <Grid item container xs={6} direction="column" p={2}>
          <Grid item mb={2}>
            <AppCard />
          </Grid>
          <Grid item>
            <Card raised sx={{ width: '100%', borderRadius: '25px', height: 120 }}>
              <CardActionArea
                sx={{
                  height: '100%',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'primary.main', // Change this to your desired hover color
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <AddCircleOutlineOutlinedIcon fontSize="large" />
                  <Typography variant="button" mt={2}>
                    Apply for New Loan
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
