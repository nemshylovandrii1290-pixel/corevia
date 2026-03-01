import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'

import Home from '@/pages/marketing/Home/Home'
import Dashboard from '@/pages/Dashboard/Dashboard'
import NotFound from '@/pages/NotFound/NotFound'
import DashboardLayout from '@/app/Layouts/DashboardLayout'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }
    ]
  }
])
