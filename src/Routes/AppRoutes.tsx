import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LayoutDashboard from "@/pages/LayoutDashboard"
import Member from "@/container/Member"
import Event from '@/container/Event'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDashboard />,
    children: [
      {path: "dashboard/anggota", element: <Member />},
      {path: "dashboard/acara", element: <Event />},
    ]
  }
])

const AppRoutes = () => {
  return <RouterProvider router={router} />
}

export default AppRoutes;

