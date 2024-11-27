import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LayoutDashboard from "@/pages/LayoutDashboard"
import Anggota from "@/container/Anggota"
import Acara from '@/container/Acara'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDashboard />,
    children: [
      {path: "dashboard/anggota", element: <Anggota />},
      {path: "dashboard/acara", element: <Acara />},
    ]
  }
])

const AppRoutes = () => {
  return <RouterProvider router={router} />
}

export default AppRoutes;

