import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {getUser} from '@/lib/auth';

const RequireAuth: React.FC = () => {
  const user = getUser();
  if (!user) {
    return <Navigate to='/login' />;
  }

  return <Outlet />;
};

export default RequireAuth;
