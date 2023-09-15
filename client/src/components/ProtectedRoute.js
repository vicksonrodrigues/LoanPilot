import { Navigate, Outlet, useLocation } from 'react-router-dom';
import React from 'react';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth.user ? <Outlet /> : <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
