import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';

import LayoutDashboard from '@/pages/LayoutDashboard';
import Member from '@/container/Member';
import Event from '@/container/Event';
import Dashboard from '@/container/Dashboard';
import Login from '@/pages/Login';
import RequireAuth from '@/components/Auth/RequireAuth';

const router = createBrowserRouter([
  {path: '/login', element: <Login />},
  {
    path: '/',
    element: <RequireAuth />,
    children: [
      {
        path: '/',
        element: <LayoutDashboard />,
        children: [
          {path: '/', element: <Navigate to={'/dashboard'} replace />},
          {path: 'dashboard', element: <Dashboard />},
          {path: 'anggota', element: <Member />},
          {path: 'acara', element: <Event />},
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
