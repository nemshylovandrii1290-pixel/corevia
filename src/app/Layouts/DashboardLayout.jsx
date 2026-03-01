import { Outlet } from 'react-router-dom'
import Sidebar from '@/widgets/Sidebar/Sidebar'

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout" style={{ display: 'flex' }}>
      <Sidebar />
      <div className="dashboard-content" style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
