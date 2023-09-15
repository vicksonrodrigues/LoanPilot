import { useTheme } from '@emotion/react';
import { Box, Tab, Tabs, useMediaQuery } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        borderBottom: { xs: 1, md: 0 },
        borderRight: { xs: 0, md: 1 },
        borderColor: 'divider',
        width: 1,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        centered
        orientation={smallScreen ? 'horizontal' : 'vertical'}
        variant="fullWidth"
      >
        <Tab label="View Loan Applications" id="simple-tab-0" component={Link} to="/loans/view" />
        <Tab
          label="Apply for New Loan"
          id="simple-tab-1"
          component={Link}
          to="/loans/application"
        />
      </Tabs>
    </Box>
  );
};

export default SideBar;
