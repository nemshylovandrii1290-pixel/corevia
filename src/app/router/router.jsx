import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'

import Home from '@/pages/marketing/Home/Home'
import Dashboard from '@/pages/Dashboard/Dashboard'
import NotFound from '@/pages/NotFound/NotFound'
import DashboardLayout from '@/app/Layouts/DashboardLayout'
import LoginPage from '@/pages/auth/LoginPage'
import PcBuildPage from '@/pages/app/PcBuildPage'
import RepairPage from '@/pages/app/RepairPage'
import ChatbotsPage from '@/pages/app/ChatbotsPage'
import WebAppsPage from '@/pages/app/WebAppsPage'
import ProjectsPage from '@/pages/app/ProjectsPage'
import BlogPage from '@/pages/app/BlogPage'
import ContactsPage from '@/pages/app/ContactsPage'
import FeedbackPage from '@/pages/app/FeedbackPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'pc-build',
        element: <PcBuildPage />
      },
      {
        path: 'repair',
        element: <RepairPage />
      },
      {
        path: 'chatbots',
        element: <ChatbotsPage />
      },
      {
        path: 'web-apps',
        element: <WebAppsPage />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'blog',
        element: <BlogPage />
      },
      {
        path: 'contacts',
        element: <ContactsPage />
      },
      {
        path: 'feedback',
        element: <FeedbackPage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
