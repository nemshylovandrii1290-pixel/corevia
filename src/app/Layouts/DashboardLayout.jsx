import { Outlet } from 'react-router-dom'
import Sidebar from '@/widgets/Sidebar/Sidebar'
import './DashboardLayout.scss'

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
