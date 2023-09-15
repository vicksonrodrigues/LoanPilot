import { Box } from '@mui/material';
import {
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from 'react-router-dom';
import React from 'react';
import ErrorPage from '../pages/ErrorPage';
import Header from './AppHeader';
import Profile from '../pages/Profile';
import Loan from '../pages/Loan';
import Authentication from '../pages/Authentication';
import LoginForm from '../pages/Authentication/LoginForm';
import SignUpForm from '../pages/Authentication/SignUpForm';
import LoanList from '../pages/Loan/LoanList';
import LoanApplication from '../pages/Loan/LoanApplication';
import ProtectedRoute from './ProtectedRoute';

const Layout = () => (
  <Box>
    <Header />
    <ScrollRestoration />
    <Box
      sx={{
        display: 'flex',
        paddingTop: '70px',
        paddingBottom: { xs: '55px', md: '0px' },
      }}
    >
      <Outlet />
    </Box>
  </Box>
);

const SiteRouter = () => {
  const BrowserRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Navigate to="/auth" replace />,
            },
            {
              path: '/auth',
              element: <Authentication />,
              children: [
                {
                  index: true,
                  element: <Navigate to="/auth/login" replace />,
                },
                {
                  path: '/auth/login',
                  element: <LoginForm />,
                },
                {
                  path: '/auth/signup',
                  element: <SignUpForm />,
                },
              ],
            },
            // Protected Routes
            {
              element: <ProtectedRoute />,
              children: [
                {
                  path: '/profile',
                  element: <Profile />,
                },
                {
                  path: '/loans',
                  element: <Loan />,
                  children: [
                    {
                      index: true,
                      element: <Navigate to="/loans/view" replace />,
                    },
                    {
                      path: '/loans/view',
                      element: <LoanList />,
                    },
                    {
                      path: '/loans/application',
                      element: <LoanApplication />,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={BrowserRoutes} />;
};

export default SiteRouter;
