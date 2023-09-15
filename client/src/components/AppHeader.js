import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import { Link, matchPath, useLocation } from 'react-router-dom';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';

const Header = () => {
  const { pathname } = useLocation();
  const isAuthPath = matchPath('/auth/*', pathname);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const MuiBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
    color: 'white',
    '&.Mui-selected': {
      color: theme.palette.secondary.light,
    },
  }));

  const NavTab = styled(Tab)(({ theme }) => ({
    color: 'rgba(255, 255, 255, 0.8)',
    '&.Mui-selected': {
      color: theme.palette.secondary.light,
    },
  }));
  return (
    <AppBar position="fixed" sx={{ height: '70px' }}>
      <Toolbar>
        {/* logo and app name */}
        <Box
          display="flex"
          alignItems="center"
          flexGrow={{ xs: '1', md: '0' }}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
        >
          <AccountBalanceIcon sx={{ mr: 1, ml: 5 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
            }}
          >
            Loan Pilot
          </Typography>
        </Box>
        {/* Navigation and logout button */}
        {!isAuthPath ? (
          <>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Box display="flex" ml={2}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  TabIndicatorProps={{ sx: { display: 'none' } }}
                >
                  <NavTab label="Profile" component={Link} to="/profile" />
                  <NavTab label="Loans" component={Link} to="/loans" />
                </Tabs>
              </Box>
              <Box>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>Logout</Button>
              </Box>
            </Box>
            <BottomNavigation
              sx={{
                display: { xs: 'flex', md: 'none' },
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'primary.main',
                height: '55px',
              }}
              showLabels
              value={value}
              onChange={handleChange}
            >
              <MuiBottomNavigationAction
                label="Profile"
                icon={<AccountCircleIcon />}
                component={Link}
                to="/profile"
              />
              <MuiBottomNavigationAction
                label="Loans"
                icon={<PaymentsIcon />}
                component={Link}
                to="/loans"
              />
              <MuiBottomNavigationAction label="Logout" icon={<LogoutIcon />} />
            </BottomNavigation>
          </>
        ) : (
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'primary.main',
              height: '55px',
            }}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
