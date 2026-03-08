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
    <div className={`layout ${sidebarOpen ? 'layout--menu-open' : 'layout--menu-closed'}`}>
      <Sidebar isOpen={sidebarOpen} />

      <div className="layout__frame">
        <Header onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="layout__scroll">
          <main className="layout__content">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
