import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

import LayoutDashboard from "@/pages/LayoutDashboard"
import Member from "@/container/Member"
import Event from '@/container/Event'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDashboard />,
    children: [
      {path: "/", element: <Navigate to={"/anggota"} replace />},
      {path: "anggota", element: <Member />},
      {path: "acara", element: <Event />},
    ]
  }
])

const AppRoutes = () => {
  return <RouterProvider router={router} />
}

export default AppRoutes;

