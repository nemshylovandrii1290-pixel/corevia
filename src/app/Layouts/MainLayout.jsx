import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/widgets/Header/Header'
import Footer from '@/widgets/Footer/Footer'
import Sidebar from '@/widgets/Sidebar/Sidebar'
import './MainLayout.scss'

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev)
  }

  return (
    <div className="layout">
      <Header onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      <div className={`layout__body ${sidebarOpen ? 'layout__body--open' : 'layout__body--closed'}`}>
        <main className="content">
          <Outlet />
        </main>
        <Sidebar isOpen={sidebarOpen} />
      </div>

      <Footer />
    </div>
  )
}

export default MainLayout
