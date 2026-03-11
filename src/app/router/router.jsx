import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'

import Home from '@/pages/marketing/Home/Home'
import NotFound from '@/pages/NotFound/NotFound'
import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'
import ProjectsPage from '@/pages/app/ProjectsPage'
import BlogPage from '@/pages/app/BlogPage'
import ContactsPage from '@/pages/app/ContactsPage'
import AboutPage from '@/pages/app/AboutPage'
import SoftwareWebApplicationsPage from '@/pages/app/SoftwareWebApplicationsPage'
import SoftwareCustomPage from '@/pages/app/SoftwareCustomPage'
import SoftwareSaasPage from '@/pages/app/SoftwareSaasPage'
import SoftwareApiPage from '@/pages/app/SoftwareApiPage'
import AutomationBusinessPage from '@/pages/app/AutomationBusinessPage'
import AutomationWorkflowPage from '@/pages/app/AutomationWorkflowPage'
import AutomationBotsPage from '@/pages/app/AutomationBotsPage'
import AutomationAiPage from '@/pages/app/AutomationAiPage'
import SystemsCrmPage from '@/pages/app/SystemsCrmPage'
import SystemsBookingPage from '@/pages/app/SystemsBookingPage'
import SystemsAdminPanelsPage from '@/pages/app/SystemsAdminPanelsPage'
import SystemsDashboardsPage from '@/pages/app/SystemsDashboardsPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/software/web-applications', element: <SoftwareWebApplicationsPage /> },
      { path: '/software/custom-software', element: <SoftwareCustomPage /> },
      { path: '/software/saas-development', element: <SoftwareSaasPage /> },
      { path: '/software/api-development', element: <SoftwareApiPage /> },
      { path: '/automation/business-automation', element: <AutomationBusinessPage /> },
      { path: '/automation/workflow-automation', element: <AutomationWorkflowPage /> },
      { path: '/automation/chat-bots', element: <AutomationBotsPage /> },
      { path: '/automation/ai-integration', element: <AutomationAiPage /> },
      { path: '/systems/crm-systems', element: <SystemsCrmPage /> },
      { path: '/systems/booking-systems', element: <SystemsBookingPage /> },
      { path: '/systems/admin-panels', element: <SystemsAdminPanelsPage /> },
      { path: '/systems/dashboards', element: <SystemsDashboardsPage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactsPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
