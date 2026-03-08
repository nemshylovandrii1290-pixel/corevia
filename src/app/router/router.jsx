import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'

import Home from '@/pages/marketing/Home/Home'
import NotFound from '@/pages/NotFound/NotFound'
import LoginPage from '@/pages/auth/LoginPage'
import PcBuildPage from '@/pages/app/PcBuildPage'
import RepairPage from '@/pages/app/RepairPage'
import ChatbotsPage from '@/pages/app/ChatbotsPage'
import ProjectsPage from '@/pages/app/ProjectsPage'
import BlogPage from '@/pages/app/BlogPage'
import ContactsPage from '@/pages/app/ContactsPage'
import FeedbackPage from '@/pages/app/FeedbackPage'
import ServicesPage from '@/pages/app/ServicesPage'
import RepairPcPage from '@/pages/app/RepairPcPage'
import RepairLaptopPage from '@/pages/app/RepairLaptopPage'
import RepairPhonePage from '@/pages/app/RepairPhonePage'
import SoftwareAppPage from '@/pages/app/SoftwareAppPage'
import SoftwareSitePage from '@/pages/app/SoftwareSitePage'
import SoftwareDirectPage from '@/pages/app/SoftwareDirectPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/services',
        element: <ServicesPage />
      },
      {
        path: '/services/pc-build',
        element: <PcBuildPage />
      },
      {
        path: '/services/repair',
        element: <RepairPage />
      },
      {
        path: '/services/repair/pc',
        element: <RepairPcPage />
      },
      {
        path: '/services/repair/laptop',
        element: <RepairLaptopPage />
      },
      {
        path: '/services/repair/phone',
        element: <RepairPhonePage />
      },
      {
        path: '/software/chatbot',
        element: <ChatbotsPage />
      },
      {
        path: '/software/app',
        element: <SoftwareAppPage />
      },
      {
        path: '/software/site',
        element: <SoftwareSitePage />
      },
      {
        path: '/software/direct',
        element: <SoftwareDirectPage />
      },
      {
        path: '/projects',
        element: <ProjectsPage />
      },
      {
        path: '/blog',
        element: <BlogPage />
      },
      {
        path: '/contacts',
        element: <ContactsPage />
      },
      {
        path: '/feedback',
        element: <FeedbackPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
